
import React, { useState } from 'react';
import './Portfolio.css';
import List from './List';
import { projects } from '../../Data';
import Items from './Items';
import { AnimatePresence } from 'framer-motion';

const allNavList = ['All', ...new Set(projects.map((project) => project.category))];

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(projects);
      return;
    } 
    
    else
    {
      const newProjectItems = projects.filter((item) => item.category === category);
      setMenuItems(newProjectItems);
    }
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>PrÓjects</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
        <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;