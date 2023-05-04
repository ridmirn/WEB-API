import  React, { Component, useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Table, DatePicker} from "antd";
import "./flightsearch.css";
import { Link } from "react-router-dom";
import Hero from "../components/navigation";

function BookFlights (){
  const [loading, setLoading] = useState(false)
    const [data,setData]=useState([]);
    const[page,setPage] = useState(1)
    const[pageSize,setPageSize] = useState(5)
    

    const [query,setQuery] = useState('');
    const [queryprice,setQueryPrice] = useState('');
    const [queryduration,setQueryDuration] = useState('');
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
 
    
    
    
  const [filterdata, setFilterdata]= useState([]);
  const [filterpricedata, setFilterpricedata]= useState([]);
  const [filterdurationdata, setFilterdurationdata]= useState([]);


    
    useEffect(()=>{
      setLoading(true)
        fetch("http://localhost:5000/getAllFlights", {
            method:"GET",
        })
    
        .then((res) => res.json())
        .then((data)=>{
            console.log(data, "flightData");
            setData(data.data);
            setFilterdata(data.data);
            setFilterpricedata(data.data);
            setFilterdurationdata(data.data);
            
            setLoading(false);
        });
    }, []) ;   
     
    const handleSort = (column) => {
      const newSortOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
      const sortedData = [...data].sort((a, b) => {
        if (newSortOrder === 'asc') {
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[column] < b[column] ? 1 : -1;
        }
      });
      setData(sortedData);
      setSortColumn(column);
      setSortOrder(newSortOrder);
    };
  
  
      const handlesearch=(event)=>{
        const getSearch= event.target.value; 
        if(getSearch.length > 0)
        {     
         const searchdata= data.filter( (item)=> item.airline.toLowerCase().includes(getSearch)) 
     
         setData(searchdata);
        } else {
          setData(filterdata);
        }
        setQuery(getSearch);
      };



      const handlesearchprice=(event)=>{
        const getPriceSearch= event.target.value; 
        if(getPriceSearch.length > 0)
        {     
         const searchPricedata= data.filter( (item)=> item.price.toLowerCase().includes(getPriceSearch)) 
     
         setData(searchPricedata);
        } else {
          setData(filterpricedata);
        }
        setQueryPrice(getPriceSearch);
      };
      const handlesearchduration=(event)=>{
        const getDurationSearch= event.target.value; 
        if(getDurationSearch.length > 0)
        {     
         const searchDurationdata= data.filter( (item)=> item.duration.toLowerCase().includes(getDurationSearch)) 
     
         setData(searchDurationdata);
        } else {
          setData(filterdurationdata);
        }
        setQueryDuration(getDurationSearch);
      };

      const columns = [
        {
          key:"1",
          title:"Airline",
          dataIndex:"airline",
          onclick: "handleSort"
        },
        {
          key:"2",
          title:"Departure",
          dataIndex:"departure"

        },
        {
          key:"3",
          title:"Duration",
          dataIndex:"duration"

        },
        {
          key:"4",
          title:"Arrival",
          dataIndex:"arrival"

        },
        {
          key:"5",
          title:"Price",
          dataIndex:"price",
        
        },
        {
          key:"6",
          title:"Book Ticket",
        
        },

      ]
    
    return(
        <div>
        <Hero/>
    <div className="position-relative">
    <div className="background">
    <div className="d-none d-xl-block position-absolute start-50 top-50 translate-middle">
        <div className="rounded p-3 bg-cp">
        <div className="d-flex algin-items-center">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label class="form-check-label fw-bold fs-7" for="flexRadioDefault1">
    One Way
  </label>
</div>
<div class="form-check ms-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label fw-bold fs-7" for="flexRadioDefault2">
  Round Trip
  </label>
</div>  
</div>
        <div className="d-flex align-items-center py-2">
            <div>
            <label for="exampleDataList" class="form-label fw-bold fs-8 m-0">From</label>
<input class="form-control inp-height inp-width" list="datalistOptions" id="exampleDataList" placeholder="Airport or City"/>
<datalist id="datalistOptions">
  <option value="Bandaranaike International Airport Colombo"/>
  <option value="Mattala International Airport"/>
  <option value="Colombo International Airport Ratmalana"/>
</datalist>
            </div>
            <div>
            <label for="exampleDataList2" class="form-label fw-bold fs-8 m-0">To</label>
<input class="form-control inp-height inp-width" list="datalistOptions2" id="exampleDataList2" placeholder="Airport or City"/>
<datalist id="datalistOptions2">
  <option value="	Aalborg Airport Denmark"/>
  <option value="Abu Dhabi International United Arab Emirates"/>
  <option value="Adelaide Airport Australia"/>
  <option value="	Adler-Sochi International Airport	Russia"/>
  <option value="	Dalaman Airport Turkey"/>
  <option value="	Dortmund Airport Germany"/>
  <option value="	Nagasaki Airport Japan"/>
  <option value="	Essey Airport	France"/>
  <option value="	Ndola Airport	Zambia"/>
  <option value="	Newcastle International United Kingdom"/>
  <option value="	Macdonald-Cartier International Airport Ontario, Canada"/>
  <option value="	Asturias Airport (Oviedo Airport)	Spain"/>
  <option value="	Rabat-Salé Airport	Morocco"/>
  <option value="	Rajkot Airport	India"/>
  <option value="	Benazir Bhutto International Airport Pakistan"/>
  <option value="	Reggio Calabria Airport Italy"/>
  <option value="	Reykjavik Airport Iceland"/>
  <option value="	Rundu Airport	Namibia"/>
  <option value=" Rovaniemi Airport	Finland"/>
  <option value="	Tabatinga International Airport	Brazil"/>
  <option value="	Tabuk Regional Airport	Saudi Arabia"/>
  <option value="	Metropolitan Area	Taiwan"/>
</datalist>
            </div>
<div>
    <label for="" className="fw-bold fs-8">Depature</label>
    <input type="date" name="departure" id="" className="form-control inp-height" />
</div>
<div>
    <label for="" className="fw-bold fs-8">Return</label>
    <input type="date" name="" id="" className="form-control inp-height"/>
</div>
<div>
    <label for="" className="fw-bold fs-8">Cabin Class</label>
    <select class="form-select inp-height inp-width" aria-label="Default select example">
  <option selected>Select Cabin Class</option>
  <option value="1">Economy</option>
  <option value="2">Premium Economy</option>
  <option value="3">Business</option>
  <option value="4">First Class</option>
</select>
</div>
<div>
    <label for="" className="fw-bold fs-8">Travellers</label>
    <select class="form-select inp-height traveller-width" aria-label="Default select example">
  <option selected>Adults (12y+)</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>
</div>
<div>
    <label for="" className="fw-bold fs-8"></label>
    <select class="form-select inp-height traveller-width" aria-label="Default select example">
  <option selected>Children(2y-12y)</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>
</div>
<div>
    <label for="" className="fw-bold fs-8"></label>
    <select class="form-select inp-height traveller-width" aria-label="Default select example">
  <option selected>Infants(below 2y)</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>
</div>

        </div>
        <div className="btn btn-dark fw-bold btn-lg inp-width"><Link to="">Search Flights</Link></div>

    </div>
    </div>
    </div>
    
                <h1 align="center">Flight Details</h1>
                <div align="center" > 
                <input  type="text" name='name' value={query}  onChange={(e)=>handlesearch(e)} placeholder='Search Airline' />
                <input  type="text" name='duration' value={queryduration}  onChange={(e)=>handlesearchduration(e)} placeholder='Search Duration' />
                <input  type="text" name='price' value={queryprice}  onChange={(e)=>handlesearchprice(e)} placeholder='Search Price' />
               
                </div>
                <Table
                loading ={loading}
                columns={columns}
                dataSource={data}
                pagination ={{
                  current:page,
                  pageSize:pageSize,
                  onChange:(page,pageSize)=>{
                    setPage(page);
                    setPageSize(pageSize)
                  }
                }}

                >

              </Table>
              
        </div>
        </div>
    );
}
export default BookFlights;


