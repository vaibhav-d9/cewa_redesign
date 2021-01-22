import React, { useEffect, lazy, Suspense } from "react";
import Slider from "react-slick";

import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import event1Img1 from "../../assets/images/event1/1.jpg";
import event1Img2 from "../../assets/images/event1/2.jpg";
import event1Img3 from "../../assets/images/event1/3.jpg";
import event1Img4 from "../../assets/images/event1/4.jpg";
import event1Img5 from "../../assets/images/event1/5.jpg";
import event1Img6 from "../../assets/images/event1/6.jpg";
import event1Img7 from "../../assets/images/event1/7.jpg";
import event1Img8 from "../../assets/images/event1/8.jpg";
import event1Img9 from "../../assets/images/event1/9.jpg";
import event1Img10 from "../../assets/images/event1/10.jpg";
import event1Img11 from "../../assets/images/event1/11.jpg";
import event1Img12 from "../../assets/images/event1/12.jpg";
import event1Img13 from "../../assets/images/event1/13.jpg";
import event1Img14 from "../../assets/images/event1/14.jpg";
import event1Img15 from "../../assets/images/event1/15.jpg";

import event2Img1 from "../../assets/images/event2/picture1.jpg";
import event2Img2 from "../../assets/images/event2/picture2.jpg";
import event2Img3 from "../../assets/images/event2/picture3.jpg";
import event2Img4 from "../../assets/images/event2/picture4.jpg";
import event2Img5 from "../../assets/images/event2/picture5.jpg";

import event3Img1 from "../../assets/images/event3/clean1.jpg";
import event3Img2 from "../../assets/images/event3/clean2.jpg";
import event3Img3 from "../../assets/images/event3/clean3.jpg";
import event3Img4 from "../../assets/images/event3/clean4.jpg";

import event4Img1 from "../../assets/images/event4/picture1.jpg";
import event4Img2 from "../../assets/images/event4/picture2.jpg";
import event4Img3 from "../../assets/images/event4/picture3.jpg";
import event4Img4 from "../../assets/images/event4/picture4.jpg";
import event4Img5 from "../../assets/images/event4/picture5.jpg";
import event4Img6 from "../../assets/images/event4/picture6.jpg";
import event4Img7 from "../../assets/images/event4/picture7.jpg";
import event4Img8 from "../../assets/images/event4/picture8.jpg";
import event4Img9 from "../../assets/images/event4/picture9.jpg";
import event4Img10 from "../../assets/images/event4/picture10.jpg";
import event4Img11 from "../../assets/images/event4/picture11.jpg";

import event5Img1 from "../../assets/images/event5/picture1.jpg";
import event5Img2 from "../../assets/images/event5/picture2.jpg";
import event5Img3 from "../../assets/images/event5/picture3.jpg";

import event6Img1 from "../../assets/images/event6/picture2.jpg";
import event6Img2 from "../../assets/images/event6/picture3.jpg";
import event6Img3 from "../../assets/images/event6/picture4.jpg";
import event6Img4 from "../../assets/images/event6/picture5.jpg";

import event7Img1 from "../../assets/images/event7/1.jpg";
import event7Img2 from "../../assets/images/event7/2.jpg";
import event7Img3 from "../../assets/images/event7/3.jpg";
import event7Img4 from "../../assets/images/event7/4.jpg";
import event7Img5 from "../../assets/images/event7/5.jpg";
import event7Img6 from "../../assets/images/event7/6.jpg";
import event7Img7 from "../../assets/images/event7/7.jpg";
import event7Img8 from "../../assets/images/event7/8.jpg";
import event7Img9 from "../../assets/images/event7/9.jpg";
import event7Img10 from "../../assets/images/event7/10.jpg";
import event7Img11 from "../../assets/images/event7/11.jpg";
import event7Img12 from "../../assets/images/event7/12.jpg";
import event7Img13 from "../../assets/images/event7/13.jpg";

import event8Img1 from "../../assets/images/event8/e10_1.jpg";
import event8Img2 from "../../assets/images/event8/e10_2.jpg";
import event8Img3 from "../../assets/images/event8/e10_3.jpg";
import event8Img4 from "../../assets/images/event8/e10_4.jpg";

import event9Img1 from "../../assets/images/event9/e11_1.jpg";
import event9Img2 from "../../assets/images/event9/e11_2.jpg";
import event9Img3 from "../../assets/images/event9/e11_3.jpg";

import event10Img1 from "../../assets/images/event10/12_1.jpg";
import event10Img2 from "../../assets/images/event10/12_2.jpg";
import event10Img3 from "../../assets/images/event10/12_3.jpg";
import event10Img4 from "../../assets/images/event10/12_4.jpg";
import event10Img5 from "../../assets/images/event10/12_5.jpg";
import event10Img6 from "../../assets/images/event10/12_6.jpg";
import event10Img7 from "../../assets/images/event10/12_7.jpg";
import event10Img8 from "../../assets/images/event10/12_8.jpg";
import event10Img9 from "../../assets/images/event10/12_9.jpg";

import event11Img1 from "../../assets/images/event11/13_1.jpg";
import event11Img2 from "../../assets/images/event11/13_2.jpg";
import event11Img3 from "../../assets/images/event11/13_3.jpg";

import event12Img1 from "../../assets/images/event12/14_1.jpg";
import event12Img2 from "../../assets/images/event12/14_3.jpg";

function Events() {
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="events">
      <div className="event event1">
        <h1 className="event_header">Health and education awarness</h1>
        <ul className="event_desc">
          <li>
            Members of team CEWA reached 100+ families in Gonda district for the
            awareness regarding the importance of education in a child's life
            especially a girl child.
          </li>
          <li>
            Along with education they informed them about the importance of
            health and hygiene followed by their relation with surroundings.
          </li>
        </ul>
        <Slider {...settings1} className="slider">
          <img src={event1Img1} alt="event1" />
          <img src={event1Img2} alt="event1" />
          <img src={event1Img3} alt="event1" />
          <img src={event1Img4} alt="event1" />
          <img src={event1Img5} alt="event1" />
          <img src={event1Img6} alt="event1" />
          <img src={event1Img7} alt="event1" />
          <img src={event1Img8} alt="event1" />
          <img src={event1Img9} alt="event1" />
          <img src={event1Img10} alt="event1" />
          <img src={event1Img11} alt="event1" />
          <img src={event1Img12} alt="event1" />
          <img src={event1Img13} alt="event1" />
          <img src={event1Img14} alt="event1" />
          <img src={event1Img15} alt="event1" />
        </Slider>
      </div>

      <div className="event event2">
        <h1 className="event_header">Ek Kadam Swacchta Ki Or</h1>
        <ul className="event_desc">
          <li>
            Team CEWA took a session over the importance and necessity of not
            using plastic bags and on all little steps which are necessary to
            keep their surrounding clean.
          </li>
          <li>
            Different competitions like Quiz were organized by them and winners
            were awarded with prizes.
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event2Img1} alt="event2" />
          <img src={event2Img2} alt="event2" />
          <img src={event2Img3} alt="event2" />
          <img src={event2Img4} alt="event2" />
          <img src={event2Img5} alt="event2" />
        </Slider>
      </div>

      <div className="event event3">
        <h1 className="event_header">
          Jann- Jann Ka Naara hai, Bharat ko swachh banana hai!
        </h1>
        <ul className="event_desc">
          <li>
            Cleanliness drives were conducted in certain schools by CEWA members
            in order to fulfill the mission “Clean India, Green India”.
          </li>
          <li>
            Students were also taught about the importance of cleanliness in day
            to day life.
          </li>
        </ul>

        <Slider {...settings1} className="slider">
          <img src={event3Img1} alt="event3" />
          <img src={event3Img2} alt="event3" />
          <img src={event3Img3} alt="event3" />
          <img src={event3Img4} alt="event3" />
        </Slider>
      </div>

      <div className="event event4">
        <h1 className="event_header">Cleanliness Drive Rally</h1>
        <ul className="event_desc">
          <li>
            Rallies were organized for the awareness of the villagers in and
            around different villages regarding the ill effects of open
            defecation and unhygienic environment
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event4Img1} alt="event4" />
          <img src={event4Img2} alt="event4" />
          <img src={event4Img3} alt="event4" />
          <img src={event4Img4} alt="event4" />
          <img src={event4Img5} alt="event4" />
          <img src={event4Img6} alt="event4" />
          <img src={event4Img7} alt="event4" />
          <img src={event4Img8} alt="event4" />
          <img src={event4Img9} alt="event4" />
          <img src={event4Img10} alt="event4" />
          <img src={event4Img11} alt="event4" />
        </Slider>
      </div>

      <div className="event event5">
        <h1 className="event_header">Activities- Quiz, Divide & Clean</h1>
        <ul className="event_desc">
          <li>
            Different intereactive sessions and events with the students were
            organized in which headmasters and teachers were also involved.
          </li>
          <li>
            Prizes were distributed for the appreciation of kids and to the
            winners.
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event5Img1} alt="event5" />
          <img src={event5Img2} alt="event5" />
          <img src={event5Img3} alt="event5" />
        </Slider>
      </div>

      <div className="event event6">
        <h1 className="event_header">Food Distribution - 1</h1>
        <ul className="event_desc">
          <li>
            Distribution of food packets took place in Bishrath, Noida and was
            headed by CEWA coordinator Mr. Mukesh Pratap Singh & his team.
          </li>
          <li>
            It was a mega food distribution one day event where protocols of
            social distancing were followed as per the government guidelines.
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event6Img1} alt="event6" />
          <img src={event6Img2} alt="event6" />
          <img src={event6Img3} alt="event6" />
          <img src={event6Img4} alt="event6" />
        </Slider>
      </div>

      <div className="event event7">
        <h1 className="event_header">Food Distribution - 2</h1>
        <ul className="event_desc">
          <li>
            A 3 day event headed by our founder Mr. Prakhar Pratap Singh which
            involved distribution of food packets simultaneously maintaining
            social distancing as per government guidelines.
          </li>
          <li>
            They were informed about the use of paper bags instead of
            polythenes.
          </li>
        </ul>

        <Slider {...settings3} className="slider">
          <img src={event7Img1} alt="event7" />
          <img src={event7Img2} alt="event7" />
          <img src={event7Img3} alt="event7" />
          <img src={event7Img4} alt="event7" />
          <img src={event7Img5} alt="event7" />
          <img src={event7Img6} alt="event7" />
          <img src={event7Img7} alt="event7" />
          <img src={event7Img8} alt="event7" />
          <img src={event7Img9} alt="event7" />
          <img src={event7Img10} alt="event7" />
          <img src={event7Img11} alt="event7" />
          <img src={event7Img12} alt="event7" />
          <img src={event7Img13} alt="event7" />
        </Slider>
      </div>

      <div className="event event8">
        <h1 className="event_header">Food Distribution - 3</h1>
        <ul className="event_desc">
          <li>
            Distribution of food packets and masks took place in Allahabad,
            Uttar Pradesh and was headed by CEWA member Kartikay Singh & his
            team.
          </li>
        </ul>

        <Slider {...settings1} className="slider">
          <img src={event8Img1} alt="event8" />
          <img src={event8Img2} alt="event8" />
          <img src={event8Img3} alt="event8" />
          <img src={event8Img4} alt="event8" />
        </Slider>
      </div>

      <div className="event event9">
        <h1 className="event_header">Food Distribution - 4</h1>
        <ul className="event_desc">
          <li>
            Food packets containing some nutritious elements were distributed in
            Lakhimpur Kheri district of Uttar Pradesh.
          </li>
          <li>
            Event was headed by CEWA member Harsh Gupta and his team in which
            there was no use of plastic bags.
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event9Img1} alt="event9" />
          <img src={event9Img2} alt="event9" />
          <img src={event9Img3} alt="event9" />
        </Slider>
      </div>

      <div className="event event10">
        <h1 className="event_header">Stationary Distribution</h1>
        <ul className="event_desc">
          <li>
            On the occasion of World Day Against Child Labour, distribution of
            learning kit to underprivileged children was done by member of CEWA
            Naimish along with his team.
          </li>
          <li>The event took place in Lucknow, Uttar Pradesh.</li>
        </ul>

        <Slider {...settings3} className="slider">
          <img src={event10Img1} alt="event10" />
          <img src={event10Img2} alt="event10" />
          <img src={event10Img3} alt="event10" />
          <img src={event10Img4} alt="event10" />
          <img src={event10Img5} alt="event10" />
          <img src={event10Img6} alt="event10" />
          <img src={event10Img7} alt="event10" />
          <img src={event10Img8} alt="event10" />
          <img src={event10Img9} alt="event10" />
        </Slider>
      </div>

      <div className="event event11">
        <h1 className="event_header">Sanitizer Distribution</h1>
        <ul className="event_desc">
          <li>
            Our team member Kanishka Sharma headed along with her team and
            distributed sanitizers to the needy one's at different places in
            South Delhi
          </li>
        </ul>

        <Slider {...settings2} className="slider">
          <img src={event11Img1} alt="event11" />
          <img src={event11Img2} alt="event11" />
          <img src={event11Img3} alt="event11" />
        </Slider>
      </div>

      <div className="event event12">
        <h1 className="event_header">Plantation Drive</h1>
        <ul className="event_desc">
          <li>
            CEWA members planted trees in different parts of Greater Noida and
            Delhi.
          </li>
          <li>
            It is the initiative taken by CEWA Foundation on the occasion of
            World Environment Day.
          </li>
        </ul>

        <Slider {...settings4} className="slider">
          <img src={event12Img1} alt="event12" />
          <img src={event12Img2} alt="event12" />
        </Slider>
      </div>
    </div>
  );
}

export default Events;
