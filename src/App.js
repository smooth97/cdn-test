import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <body>
    <p>Simple table with header</p>
    <table>
        <tr>
            <th>First name</th>
            <th>Last name</th>
        </tr>
        <tr>
            <td>John</td>
            <td>Doe</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Doe</td>
        </tr>
    </table>

    <p>Table with thead, tfoot, and tbody</p>
    <table>
        <thead>
        <tr>
            <th>Header content 1</th>
            <th>Header content 2</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
        </tr>
        </tfoot>
        <tbody>
        <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
        </tr>
        </tbody>
    </table>

    <p>Table with colgroup</p>
    <table>
        <colgroup span="4" className="columns"/>
        <tr>
            <th>Countries</th>
            <th>Capitals</th>
            <th>Population</th>
            <th>Language</th>
        </tr>
        <tr>
            <td>USA</td>
            <td>Washington D.C.</td>
            <td>309 million</td>
            <td>English</td>
        </tr>
        <tr>
            <td>Sweden</td>
            <td>Stockholm</td>
            <td>9 million</td>
            <td>Swedish</td>
        </tr>
    </table>

    <p>Table with colgroup and col</p>
    <table>
        <colgroup>
            <col className="column1"/>
            <col className="columns2plus3" span="2"/>
        </colgroup>
        <tr>
            <th>Lime</th>
            <th>Lemon</th>
            <th>Orange</th>
        </tr>
        <tr>
            <td>Green</td>
            <td>Yellow</td>
            <td>Orange</td>
        </tr>
    </table>

    <p>Simple table with caption</p>
    <table>
        <caption>Awesome caption</caption>
        <tr>
            <td>Awesome data</td>
        </tr>
    </table>

    </body>
    </div>
  );
}

export default App;
