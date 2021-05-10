import styled from 'styled-components';

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

  max-width: 1280px;
  width: 100%;

  @media (min-width: 600px) {
    margin: 0 auto;
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;

  div {
  }

  div:nth-child(1) {
  }

  .group-input {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 25rem;
    background-color: white;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #d3d3d3d3;

    div:first-child {
      display: flex;
      margin-left: 5px;
      align-items: center;
    }

    div:last-child {
      flex: 1;
    }
    input {
      width: 80%;
      border: none;
      margin-left: 5px;
      outline: none;
      color: #a9a9a9;
      font-family: sans-serif;
      padding: 5px;

      &::placeholder {
      }
    }
  }

  img {
    width: 10rem;
    height: 5rem;
  }

  @media (min-width: 320px) {
    flex-direction: column;
    background-color: black;
    width: 100%;
    display: flex;

    div:nth-child(1) {
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    background-color: purple;

    .group-input {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      width: 25rem;
      background-color: white;
      padding: 5px;
      border-radius: 15px;
      border: 1px solid #d3d3d3d3;
    }
  }
`;

export const SectionMiddle = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  margin-bottom: 50px;

  @media (min-width: 150px) {
    display: grid;
    grid-template-columns: 5fr;
  }

  @media (min-width: 640px) {
    /* flex-direction: row; */
    grid-template-columns: 1fr;
  }

  @media (min-width: 780px) {
    /* flex-direction: row; */
    grid-template-columns: 2fr 5fr;
  }

  .quantity-items {
    display: flex;
    flex: 1;
    justify-content: center;

    span {
      font-size: 1.2em;
    }
  }
  .not-found-item * {
    display: flex !important;
    width: 100%;
    justify-content: center !important;
    span {
      font-size: 1.2em;
    }
  }

  .section-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;

    div:nth-child(2) {
      span {
        margin-right: 5px;
      }
    }
    select {
      padding: 5px;
      outline: none;
    }
  }

  .set-section-middle {
    flex: 10;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .grid-template {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;
      text-align: center;

      img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #d3d3d3d3;
      }

      span {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
      }
      .title {
        font-weight: bold;
        font-size: 1.5rem;
      }

      span:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 1.3rem;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    button:first-of-type {
      background-color: transparent;
      &:hover {
        background-color: transparent !important;
        text-decoration: underline;
      }
    }

    button:last-of-type {
      background-color: transparent;

      &:hover {
        text-decoration: underline;

        background-color: transparent !important;
      }
    }

    button {
      padding: 5px;
      background-color: white;
      border: 1px solid #d3d3d3d3;
      cursor: pointer;

      &:hover {
        background-color: whitesmoke;
      }
    }
    a {
      padding: 5px;
    }

    .active {
      background-color: black !important;
      color: white;
    }
  }
  @media (min-width: 320px) {
    .set-section-middle {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 600px) {
    .set-section-middle {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .set-section-middle {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex: 5;

  .container-checkbox {
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    margin-bottom: 2px;
    justify-items: center;

    div:nth-child(1) {
    }

    div:nth-child(2) {
    }

    div {
      display: flex;
      align-items: center;

      input[type='checkbox'] {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      label {
        margin-left: 5px;
        color: gray;
        font-family: sans-serif;

        &:hover {
          color: silver;
        }
      }
    }
  }

  @media (min-width: 0px) {
    display: flex;
    flex-direction: row;
    flex: 2;

    .container-checkbox {
      display: flex;

      div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        white-space: normal;
      }
    }
  }

  @media (min-width: 660px) {
    display: flex;
    flex-direction: column;
    flex: 2;
  }

  /* &:nth-child(1) div {
    display: flex;
  } */

  /* div:last-of-type {
    background-color: red;
    margin-top: 10px;
  } */
`;
