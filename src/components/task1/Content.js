import React from 'react'

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
        };
    }

    changeBackground = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

        this.setState({
            backgroundColor: randomColor,
        });
    };

    render() {
        return (
            <main className="main-content">
                <div className="main-info">
                    <p id="second" style={{ backgroundColor: this.state.backgroundColor }} onClick={this.changeBackground}>Дата та місце народження: 12 квітня, 2004, м. Дніпро</p>
                    <p>Місце навчання: НТУУ "КПІ", м. Київ</p>
                </div>

                <div className="hobby">
                    <p>Хоббі:</p>
                    <ul>
                        <li>Пити пиво</li>
                        <li>Грати в баскетбол</li>
                        <li>Їсти</li>
                    </ul>
                </div>

                <div className="fav-films">
                    <p>Улюблені фільми:</p>
                    <ol>
                        <li>"Сам у дома", 1990</li>
                        <li>"День Незалежності", 1996</li>
                        <li>"Вовк з Уолл Стріт", 2013</li>
                    </ol>
                </div>

                <div className="city">
                    <p className="info-city">Лісабон — столиця та найбільше місто Португалії, політичний, економічний та
                        культурний центр країни.
                        Адміністративний центр однойменного округу.
                        Найзахідніша столиця материкової Європи та єдина на узбережжі Атлантичного океану.
                    </p>
                </div>
            </main>
        )
    }
}

export default Content
