import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import ReactDOM from 'react-dom';
import Main from '../App/Main.js';
import styled from 'styled-components';

const SubmitButtom = styled.button`
    position: relative;
    right:20px;
    width:;
    padding: 11px 40%;
    color: #fff;
    font-size:15px;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%);
    &:hover{
        filter: brightness(1.03);
    }
`;




class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={MarketState:'',
                columnDefs:[
                  {headerName:'Name',field:'Name',sortable:true , filter:true,checkboxSelection:true},
                  {headerName:'',field:''},
                  {headerName:'market',field:'Market',sortable:true , filter:true},
                  {headerName:'',field:''},
                  {headerName:'Region',field:'Region',sortable:true , filter:true},
                  {headerName:'',field:''},
                  {headerName:'Price($)',field:'Price',sortable:true , filter:true},
                  {headerName:'',field:''},
                  {headerName:'TimeZone',field:'TimeZone',sortable:true , filter:true},
 
                ],
                rowData: [],
                clientId:'  PersonalToken'
                

  };
  }

  componentDidMount() {
    fetch(`https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US`,{
            method: 'GET',
            params: {modules: 'defaultKeyStatistics,assetProfile'},
            headers: {
              'x-api-key': `${this.state.clientId}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.marketSummaryResponse){
                return[];
            }
                return jsonResponse.marketSummaryResponse.result.map(stock =>({
                Name: stock.exchange,
                TimeZone: stock.exchangeTimezoneName,
                Market:stock.market,
                Region: stock.region,
                Price: stock.regularMarketPrice.fmt, 
            }))

    }).then(rowData=>{
      this.setState({rowData: rowData})
    })
  }

  onButtonClick=()=>{
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node=>node.data);
    const presentation = selectedData.map(node=>`Name: ${node.Name} Price: ${node.Price} Market: ${node.Market} Region: ${node.Region}`).join(',  ');
    alert(`selected Stock : ${presentation}`)
  }
  signOut=()=>{
    ReactDOM.render(
      <Main />,
      document.getElementById('root'));
  }
  
  render(){
    return (
        <div className="ag-theme-balham"
        style={{width:2000, height: 500}}>
                 <SubmitButtom onClick = {this.signOut}>Sign Out</SubmitButtom><br/>
                 <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} onGridReady={params => this.gridApi = params.api} rowSelection="multiple"/>
                 <SubmitButtom onClick = {this.onButtonClick}> Click Here To Get Selected Rows</SubmitButtom>   
        </div>

    );
  }
  }


export default App;

