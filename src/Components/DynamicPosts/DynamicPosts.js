import React,{useContext} from 'react'
import "./dynamicposts.css"
import {AllPostContext} from "../../contextStore/AllPostContext" ;
import PostCards from '../PostCards/PostCards';
import {Link} from "react-router-dom";

function DynamicPosts({category,region}) {

  console.log(region)
    
    const {allPost}=useContext(AllPostContext)
    let displayCards=allPost.filter((itm)=>(itm.category===category && itm.region===region) ).map((product,index)=>{return(  
      // change above
      <PostCards product={product} index={index} key={index} />
    )});
    
    return (<>
     { category!=="null" && <div>
            <div className="moreView">
        <div className="heading">
          <span>{category}</span>
         <Link to="./viewmore"> <span>View more</span> </Link>
        </div> 
        <div className="cards">{displayCards}</div>
      </div>
        </div> } 
        </>
   )
}


export default DynamicPosts
