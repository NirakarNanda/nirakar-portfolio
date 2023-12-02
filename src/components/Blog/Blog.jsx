import React from 'react'
import './Blog.css'
import { FaArrowRight } from 'react-icons/fa'; 
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import shapeOne from '../../assets/shape-1.png';

const Blog = () => {
  return (
    <section className="blog" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
            <p className="section__subtitle">
                My <span>Articles and Writings</span>
            </p>

            <div className="blog__container container grid">
                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">OCTOBER 10, 2021</span>
                    <h3 className="blog__title">The main Thing for Designer</h3>
                    <p className="blog__description">
                    The main thing for a designer is to create things that are pleasing to them, the work brings satisfaction, and cooperation with the customer — satisfaction. They need to understand what the customer wants, and to connect it with their wishes and possibilities.
                    </p>

                    <a href="" className="link">
                        Read More 
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={blog1} alt="" className="blog__img" />
                </div>

                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">OCTOBER 10, 2021</span>
                    <h3 className="blog__title">The main Thing for Designer</h3>
                    <p className="blog__description">
                    The main thing for a designer is to create things that are pleasing to them, the work brings satisfaction, and cooperation with the customer — satisfaction. They need to understand what the customer wants, and to connect it with their wishes and possibilities.
                    </p>

                    <a href="" className="link">
                        Read More 
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={blog2} alt="" className="blog__img" />
                </div>

                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">OCTOBER 10, 2021</span>
                    <h3 className="blog__title">The main Thing for Designer</h3>
                    <p className="blog__description">
                    The main thing for a designer is to create things that are pleasing to them, the work brings satisfaction, and cooperation with the customer — satisfaction. They need to understand what the customer wants, and to connect it with their wishes and possibilities.
                    </p>

                    <a href="" className="link">
                        Read More 
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={blog3} alt="" className="blog__img" />
                </div>
                
            </div>


            <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>

    </section>
  )
}

export default Blog