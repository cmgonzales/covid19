import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({
    once: false

});

export default class about extends Component {

    render() {
        return (
            <div>
              <h1 data-aos="zoom-in" >Remembering those who loss their life due to COVID-19 </h1>
            </div>
        )
    }
}
