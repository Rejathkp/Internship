import React from 'react'
import image1 from "../../assets/Image(1).png"
import image2 from "../../assets/Rectangle6(1).png"
import image3 from "../../assets/Rectangle6.png"

const Highlights = () => {
    const highlight_list = [
        {
            namee:"Surfing",
            description: "Best Hawaiian islands for surfing",
            img:{image1}
        },
        {
            namee:"Hula",
            description: "Try it yourself",
            img:{image2}
        },
        {
            namee:"Vulcanoes",
            description: "Volcanic conditions can change at any time.",
            img:{image3}
        }
    ]
  return (
    <div className='highlights'>
        <h4>Highlights</h4>
        <div className='img-container'>
            <img src={img} alt="" />
        </div>
        <div className='card-contents'>
            <p>{namee}</p>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default Highlights