import React,{useState} from 'react';
import Categories from './Categories';
// import img1 from '../assets/images/img1.png';
 const Category = () => {
    const [data, setData] = useState(Categories);
    const filterResult=(catitem)=>{
     const result=Categories.filter((curdata)=>{
        return curdata.category===catitem
     })
     setData(result);
    }
    return (
        <>
            <h1 className="text-center text-warning">E-commerce Amazon</h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('mens clothing')}>Men</button>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('womens clothing')}>Women</button>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('jewelery')}>Jewellery</button>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('electronics')}>ElectronicProducts</button>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('Gaming')}>Laptop</button>
                        <button className='btn btn-warning w-100 mb-3' onClick={()=>filterResult('AllDress')}>All</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {
                                data.map((values) => {
                                    const{id,title,price,images}=values;
                                    return (
                                        <>
                                            <div className='col-md-4 mb-4' key={id}>
                                                <div className="card">
                                                    <img src={images} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{title}</h5>
                                                        <p>Price:{price}</p>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <button className="btn btn-dark">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;