import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from '../components/Header.jsx'
import { Card } from '../components/Card.jsx'
import './index.css'

let URL1 = "https://scrimba.com/links/travel-journal-japan-image-url"
let URL2 = "https://scrimba.com/links/travel-journal-australia-image-url"
let URL3 = "https://scrimba.com/links/travel-journal-norway-image-url"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Header />

    <Card location_img = {URL1} 
    place = "Mount Fuji" 
    date = "December 15, 2023" 
    description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1708." />
    
    
    <Card location_img = {URL2} 
    place = "Sydney Opera House" 
    date = "March 28, 2023" 
    description = "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. It is one of the most recognizable buildings in the world." />
    
    
    <Card location_img = {URL3} 
    place = "Northern Lights" 
    date = "November 10, 2023" 
    description = "The Northern Lights (Aurora Borealis) are natural light displays in the sky that occur in the polar regions." />
    
  
  </StrictMode>
)
 