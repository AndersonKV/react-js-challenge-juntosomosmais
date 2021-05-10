import React, { useEffect } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import api from '../services/api';
import { Aside, Main, SectionMiddle } from './styles';
import { useState } from 'react';

import Header from '../components/Header';
import Pagination from '../components/Pagination';

interface Props extends RouteComponentProps<any> {
  history: any;
}

export interface DataProps {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    postcode: number;
    state: string;
    street: string;
    timezone: {
      description: string;
      offset: string;
    };
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: { date: string; age: number };
}

const Home: React.FC<Props> = ({ history }) => {
  const [data, setData] = useState<DataProps[]>();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>();
  const [orderSelected, setOrderSelected] = useState('todos');
  const [loading, setLoading] = useState(false);

  const fetchSpecificData = async (param: string) => await api.get(param);

  async function fetchData(pageProps: string, select: string) {
    if (select === 'todos') {
      const getAll = await api.get(`results`);
      const { data } = await api.get(`results?&_page=${pageProps}&_limit=10`);

      const result = getAll.data.length / 10;

      setTotal(result);
      setData(data);
      setPage(Number(pageProps));
      return;
    }

    if (select === 'ordem-alfabetica') {
      const { data } = await fetchSpecificData('results');

      const getTenData = await fetchSpecificData(
        `results?_sort=name.first&_page=${pageProps}&_limite=10`
      );

      const result = data.length / 10;

      setTotal(result);
      setData(getTenData.data);
      setPage(Number(pageProps));
      return;
    }

    if (select === 'por-homens') {
      const { data } = await fetchSpecificData('results?gender=male');

      const getTenData = await fetchSpecificData(
        `results?gender=male&_page=${pageProps}&_limit=10`
      );

      const result = data.length / 10;

      setTotal(result);
      setData(getTenData.data);
      setPage(Number(pageProps));
      return;
    }

    if (select === 'por-mulheres') {
      const { data } = await fetchSpecificData('results?gender=female');

      const getTenData = await fetchSpecificData(
        `results?gender=female&_page=${pageProps}&_limit=10`
      );

      const result = data.length / 10;

      setTotal(result);
      setData(getTenData.data);
      setPage(Number(pageProps));
      return;
    }

    // const { data } = await api.get(`results?&_page=${pageProps}&_limit=10`);

    // setData(data);
    // setPage(Number(pageProps));
  }

  async function handleFetchMore(index: any) {
    const inputs = document.querySelectorAll(
      'aside input'
    ) as NodeListOf<HTMLInputElement>;

    const arr: string[] = [];

    inputs.forEach(element => {
      if (element.checked) {
        arr.push(element.id);
      }
    });

    console.log(arr);
    fetchData(index.toString(), orderSelected);
  }

  useEffect(() => {
    async function getApi() {
      fetchData('1', 'todos');
      setLoading(true);
    }

    getApi();
  }, []);

  async function handleSearch(text: string) {
    if (text.length > 3) {
      const { data } = await api.get(`results?name.first_like=${text}`);

      if (data.length > 0) {
        setData(data);
        setTotal(0);
      } else {
        setData([]);
        setTotal(0);
      }
    }
  }

  async function fetchMore(arr: String[]) {
    const { data } = await fetchSpecificData(
      `results?location.state=${arr
        .toString()
        .replaceAll(',', '&location.state=')}`
    );

    setTotal(0);
    setData(data);
  }

  function formatedStreetName(name: string) {
    const getStringName = name;

    const firstName = getStringName.split(' ')[0];
    const separate = getStringName.split(' ');
    const arrString: String[] = [];

    separate.forEach((element, i) => {
      if (element.length > 0 && i !== 0) {
        arrString.push(element);
      }
    });

    return `${arrString.toString().replaceAll(',', ' ')}, ${firstName}`;
  }

  async function handleSelectOption(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    if (event.target.value === 'todos') {
      setOrderSelected(event.target.value);
      fetchData('1', event.target.value);
      return;
    }

    if (event.target.value === 'ordem-alfabetica') {
      setOrderSelected(event.target.value);
      fetchData('1', event.target.value);
      return;
    }

    if (event.target.value === 'por-homens') {
      setOrderSelected(event.target.value);
      fetchData('1', event.target.value);

      return;
    }

    if (event.target.value === 'por-mulheres') {
      setOrderSelected(event.target.value);
      fetchData('1', event.target.value);
      return;
    }
  }

  function handleInputChecked(id: string) {
    const inputs = document.querySelectorAll(
      'aside input'
    ) as NodeListOf<HTMLInputElement>;

    const arr: string[] = [];

    inputs.forEach(element => {
      if (element.checked) {
        arr.push(element.id);
      }
    });

    fetchMore(arr);
  }

  return (
    <Main>
      {loading === true ? (
        <>
          <Header handleSearch={handleSearch} />
          <h1>Lista de membros</h1>

          <SectionMiddle>
            <Aside>
              <h3>Por Estado</h3>
              <div className="container-checkbox">
                <div>
                  <input
                    id="sao paulo"
                    type="checkbox"
                    onChange={event => handleInputChecked(event.target.id)}
                  />
                </div>
                <div>
                  <label htmlFor="sao paulo">São Paulo</label>
                </div>
              </div>
              <div className="container-checkbox">
                <div>
                  <input
                    id="rio de janeiro"
                    type="checkbox"
                    onChange={event => handleInputChecked(event.target.id)}
                  />
                </div>
                <div>
                  <label htmlFor="rio de janeiro">Rio de Janeiro</label>
                </div>
              </div>
              <div className="container-checkbox">
                <div>
                  <input
                    id="minas gerais"
                    type="checkbox"
                    onChange={event => handleInputChecked(event.target.id)}
                  />
                </div>
                <div>
                  <label htmlFor="minas gerais">Minas Gerais</label>
                </div>
              </div>
              <div className="container-checkbox">
                <div>
                  <input
                    id="espirito santo"
                    type="checkbox"
                    onChange={event => handleInputChecked(event.target.id)}
                  />
                </div>
                <div>
                  <label htmlFor="espirito santo">Espirito Santo</label>
                </div>
              </div>
              <div className="container-checkbox">
                <div>
                  <input
                    id="bahia"
                    type="checkbox"
                    onChange={event => handleInputChecked(event.target.id)}
                  />
                </div>
                <div>
                  <label htmlFor="bahia">Bahia</label>
                </div>
              </div>
            </Aside>

            <section>
              <Pagination
                data={data}
                total={total}
                page={page}
                handleFetchMore={handleFetchMore}
              />
              <div className="section-top">
                {total && total > 0 ? (
                  data && data?.length > 0 ? (
                    <>
                      <div>
                        <span>
                          Exibidos {page} de {total} items
                        </span>
                      </div>
                      <div>
                        <span>Ordenado por: </span>
                        <select onChange={event => handleSelectOption(event)}>
                          <option value="todos">Todos</option>
                          <option value="ordem-alfabetica">
                            Ordem alfabetica
                          </option>
                          <option value="por-homens">Por homens</option>
                          <option value="por-mulheres">Por mulheres</option>
                        </select>
                      </div>
                    </>
                  ) : null
                ) : (
                  <div className="quantity-items">
                    <span>{data?.length} items</span>
                  </div>
                )}
              </div>

              <div
                className={`section-middle ${
                  data && data?.length > 0 ? 'set-section-middle' : null
                } `}
              >
                {data && data.length > 0 ? (
                  data?.map((perfil, index) => {
                    return (
                      <div className="grid-template" key={index}>
                        <div>
                          <img
                            src={perfil.picture.large}
                            alt="imagem from profile"
                          />
                        </div>
                        <span className="title">{perfil.name.first}</span>
                        <span>
                          {formatedStreetName(perfil.location.street)}
                        </span>
                        <span>{perfil.location.city}</span>
                        <span>
                          <span>
                            {perfil.location.state} - CEP -{' '}
                            {perfil.location.postcode}
                          </span>
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="not-found-item">
                    <span>Infelizmente nada foi encontrado :(</span>
                  </div>
                )}
              </div>

              <Pagination
                data={data}
                total={total}
                page={page}
                handleFetchMore={handleFetchMore}
              />
            </section>
          </SectionMiddle>
        </>
      ) : null}
    </Main>
  );
};

export default Home;
