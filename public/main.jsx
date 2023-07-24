  const main = document.getElementById("main");  
    const mainRoot = ReactDOM.createRoot(main);

    mainRoot.render(
        <main>
            <div className="main_ihfo">
                <div className="right_info">
                    <h1>ГО, МЫ СОЗДАЛИ!</h1>
                    <h2>Старт регистрации команд</h2>
                    <p>01.08-11.09</p>
                </div>
                <div className="left_info">
                    <a href="SaveNewStudent.html" className="button">Я Пойду!</a>
                    <a href="GetIdStudent.html" className="button">Посмотреть студента</a>
                    <a href="GetAllStudent.html" className="button">Все кто придет</a>
                    <a href="PutFamilia.html" className="button">Изменить фамилию</a>
                    <a href="ImiaGet.html" className="button">Искать студента по имени</a>
                </div>
            </div>
            <div className="aroww">
                <div className="elem_aroow"></div>
                <div className="elem_aroow"></div>
            </div>
        </main>
     );