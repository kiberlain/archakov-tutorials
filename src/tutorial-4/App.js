import React from "react"
import './App.css'
import { adjectives, nouns} from './data'

import EmptyBlock from "./components/EmptyBlock"
import Phrases from "./components/Phrases";


export default function App() {
    const adjectivesArr = adjectives
    const nounsArr = nouns
    const numQuotes = 3

    const getRandomWord = (arr) => {
        let max = Math.floor(arr.length)
        return arr[Math.floor(Math.random() * (max))]
    }

    const [List, setList] = React.useState([])

    const generateList = () => {

        // тут можно было сделать нормально-стильно-молодёжно, но я затупил и не знаю как
        let count = 0
        while(count < numQuotes){
            let quote = `${getRandomWord(adjectivesArr)} ${getRandomWord(adjectivesArr)} ${getRandomWord(nounsArr)}`
            List.push(quote)
            count++
        }

        setList([...List]);

    };

    const clearList = () => {
        setList([]);
    }

    return(
        <section className="wrapper">

            {!List.length ? <EmptyBlock  /> : <Phrases items={List} />}

            <div className="actions">
                <button className="btn_generate" onClick={generateList}>Сгенерировать</button>
                <button className="btn_clear" onClick={clearList}>Очистить</button>
            </div>

        </section>
    )
}