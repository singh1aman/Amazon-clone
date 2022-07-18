import React from "react";
import css from "./Card.css";
import data from "./Object";

export default function Card({ inputState }) {
  // console.log(inputState)
  let filteredData = data.filter((ele) =>
    ele.type.includes(inputState.toLowerCase())
  );
  console.log(filteredData);
  return (
    <>
      <div>
        {filteredData.length === 0
          ? data.map((ele) => {
              // console.log(ele)
              return (
                <>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="top-part">
                        <img className="img-cls" src={ele.image}></img>
                      </div>
                      <div className="bottom-part">
                        <div className="title">{ele.title}</div>
                        <div className="id-price-div">
                          <div className="id">id:{ele.id}</div>
                          <div className="price">{ele.price}/-</div>
                        </div>
                        <div className="type">{ele.type}</div>
                        <div className="tp">Qnt:{ele.totalquantity}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : filteredData.map((ele) => {
              // console.log(ele)
              return (
                <>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="top-part">
                        <img className="img-cls" src={ele.image}></img>
                      </div>
                      <div className="bottom-part">
                        <div className="title">{ele.title}</div>
                        <div className="id-price-div">
                          <div className="id">id:{ele.id}</div>
                          <div className="price">{ele.price}/-</div>
                        </div>
                        <div className="type">{ele.type}</div>
                        <div className="tp">Qnt:{ele.totalquantity}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
}

// data.map(ele =>{
//   // console.log(ele)
//   return(
//     <>
//     <div className='card-wrapper'>
//     <div className='card-container'>
//       <div className='top-part'>
//           <img className='img-cls' src={ele.image}></img>

//       </div>
//       <div className='bottom-part'>
//           <div className='title'>{ele.title}</div>
//           <div className='id-price-div'>
//             <div className='id'>id:{ele.id}</div>
//             <div className='price'>{ele.price}/-</div>
//           </div>
//           <div className='type'>{ele.type}</div>
//           <div className='tp'>Qnt:{ele.totalquantity}</div>

//       </div>

//     </div>
//     </div>
//   </>
//   )
// })
