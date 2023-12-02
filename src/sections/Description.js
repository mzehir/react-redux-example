import React from "react";

const Description = () => {
  return (
    <div>
      <h1>React - Redux Examp</h1>
      <p>
        Bu projede react ,redux, reduxjs/toolkit yapılandırması nasıl olmalı
        sorusunun cevabı niteliğinde bir sayaç uygulaması yapılmıştır.
      </p>

      <p>
        Redux yapılandırması yapılırken özellikle yapı, kod okunurluğu daha
        hızlı anlaşılabilsin diye kısımlara, dosyalara bölünmüştür. Örneğin
        redux yapısında var olan slice, actions, reducer kısımları aynı dosyada
        yer alabilecekken, işlevsel mantığa uygun şekliyle parçalanmıştır.
      </p>

      <p>
        Tabi ki bu yapılandırma projeye ve kişiye göre değişiklik gösterebilir.
      </p>

      <p>Konu ile alakalı resmi dökümanlar aşağıya eklenmiştir.</p>

      <span>
        <span>Öğren </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> ve </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </div>
  );
};

export default Description;
