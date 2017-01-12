// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";


// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";



// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/style.css");


const images = {
  vue: require("../assets/logo.png"),
  facebook: require("../assets/facebook.png"),
  twitter: require("../assets/twitter.png"),
  github: require("../assets/github.png"),
  robbert: require("../assets/robbert.gif"),
  reactive: require("../assets/reactive.png"),
  whoopwhoop: require("../assets/whoopwhoop.gif"),
  what: require("../assets/what.gif"),
  coding: require("../assets/coding.gif"),
  coding2: require("../assets/coding2.gif"),
  questions: require("../assets/questions.gif")
};

preloader(images);

const theme = createTheme({
  primary: "teal",
  secondary: "#CDBB79"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary">
                      <Image src={images.vue.replace("/", "")} height="250px"/>

            <Heading size={1} textSize="2.5em" caps>
              Vue.js 2.0
            </Heading>
            <br />
            <Text textSize="1em" textColor="white" margin="20px 0px 0px" bold>
       An introduction by <a href="https://twitter.com/robbert_wolfs" target="_blank">@robbert_wolfs</a></Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Image src={images.robbert.replace("/", "")} margin="0px auto 20px" height="200px" className="meMyselfAndI"/>
             
             <Heading size={1} textSize="2em" caps>
              Who am I?
            </Heading>

             <Text textSize="1em" textColor="white" margin="20px 0px 0px" bold>
                <ul>
                  <Appear fid="1"><li>Alumni MCT</li></Appear>
                  <Appear fid="2"><li>Consultant / Frontend Developer <a href="www.euri.com" className="dark" target="_blank">@Euricom</a></li></Appear>
                  <Appear fid="3"><li>Currently learning/working with Vue.js for <br /> the <a className="dark" href="https://medium.freecodecamp.com/start-2017-with-the-100daysofcode-improved-and-updated-18ce604b237b#.y2osfnsw6" target="_blank">#100DaysOfCode</a> challenge.</li></Appear>
                </ul>

                <Appear fid="4" >
                <div>
                  <span className="social-icon"><a href="https://www.facebook.com/wolfsrobbert" target="_blank"><Image src={images.facebook.replace("/", "")}height="24px"/></a></span>
                    <span className="social-icon"><a href="https://twitter.com/robbert_wolfs" target="_blank"><Image src={images.twitter.replace("/", "")}height="24px"/></a></span>
                    <span className="social-icon"><a href="https://github.com/RobbertWolfs" target="_blank"><Image src={images.github.replace("/", "")}height="24px"/></a></span>
                </div>
              </Appear>
              </Text>
          </Slide>


  <Slide transition={["zoom"]} bgColor="primary" textColor="white">
  <Heading size={1} textSize="2em" caps>
             Table of Content
            </Heading>

            <List>
              <Appear><ListItem>What's Vue.js?</ListItem></Appear>
              <Appear><ListItem>Basic Setup</ListItem></Appear>
              <Appear><ListItem>Reactive data binding</ListItem></Appear>
              <Appear><ListItem>Directives</ListItem></Appear>
              <Appear><ListItem>Components</ListItem></Appear>
              <Appear><ListItem>Demo</ListItem></Appear>
            </List>
          </Slide>

 <Slide transition={["slide"]} bgColor="secondary" textColor="white">
  <Heading size={1} textSize="2em" caps>
            What's Vue.js?
            </Heading>

            <List>
              <Appear><ListItem>Front-end lightweight (76kb on disk) js library;</ListItem></Appear>
              <Appear><ListItem>Reactive data binding and composable view components;</ListItem></Appear>
              <Appear><ListItem>Very easy to use, straightforward syntax;</ListItem></Appear>
              <Appear><ListItem>Virtual Dom</ListItem></Appear>
            </List>
          </Slide>


            <CodeSlide
              transition={["slide"]}
              lang="html"
              code={require("raw!../assets/setup-html.example")}
              ranges={[
                { loc: [0, 15], title: "Basic setup" },
                { loc: [0, 3] },
                { loc: [4, 12] },
                { loc: [5, 6] },
                { loc: [6, 7] },
                { loc: [7, 10] },
                { loc: [0, 15] },
                { loc: [0, 15], note: "http://codepen.io/RobbertWolfs/pen/YNqqRJ" }
              ]}
            />         

           <Slide transition={["slide"]} bgImage={images.whoopwhoop.replace("/", "")} bgDarken={0.5}>
           
              <Heading size={1} caps fit textColor="white">
                Whoop whoop
              </Heading>
            <Text textSize="2em" textColor="white" margin="20px 0px 0px" bold>
      That was easy</Text>
          </Slide>

          <Slide transition={["fade"]} >
            <Heading size={1} textSize="2em" caps>
               Reactive data binding
              </Heading>

              <br/>
                 <Image src={images.reactive.replace("/", "")} width="100%"/>

          </Slide>

               <Slide transition={["slide"]} bgImage={images.what.replace("/", "")} bgDarken={0.5} note="Go back to codepen and show an v-if or something.">
                  <Appear> 
   <Text textSize="1.5em" textColor="white" margin="20px 0px 0px" >
It keeps your data (i.e. your Javascript variables, arrays etc) in sync with your DOM without you having to do anything.</Text></Appear>
          </Slide>

           <Slide transition={["slide"]} bgColor="secondary" textColor="white">
  <Heading size={1} textSize="2em" caps>
          Directives
            </Heading>

            <Appear>
               <Text textSize=".8em" textColor="white" margin="20px 0px 0px" bold>
                Comparable with html attributes.  <br /> Here are some examples of Vue specific directives :
      </Text>
            </Appear>

            <List>
              <Appear><ListItem><b>v-show:</b> show/hide</ListItem></Appear>
              <Appear><ListItem><b>v-if:</b>  render/remove</ListItem></Appear>
              <Appear><ListItem><b>v-for:</b>  loop over a set of properties</ListItem></Appear>
              <Appear><ListItem><b>v-bind:</b>  bind properties to the element</ListItem></Appear>
              <Appear><ListItem><b>v-on:</b>  bind methods to the element</ListItem></Appear>
              <Appear><ListItem>...</ListItem></Appear>
            </List>
          </Slide>

    <CodeSlide
    notes="Show differnce between v-if and v-show, show v-bind and shorthand, show v-on click and submit (also remove the .prevent for demo)"
              transition={[ "fade "]}
              lang="html"
              code={require("raw!../assets/directives.example")}
              ranges={[
                { loc: [0, 36], title: "Directives"},
                { loc: [1, 2] },
                { loc: [2, 3] },
                { loc: [3, 6] },
                { loc: [6, 7] },
                { loc: [7, 8] },
                { loc: [8, 11] },
                { loc: [0, 12], note: "http://codepen.io/RobbertWolfs/pen/ygOJMo" }
              ]}
            />         


          <CodeSlide
           notes="Component templates always need one root element."
              transition={[ "fade "]}
              lang="html"
              code={require("raw!../assets/components.example")}
              ranges={[
                { loc: [0, 18], title: "Components" },
                { loc: [0, 3] },
                { loc: [13, 16] },
                { loc: [5, 12] },
                { loc: [5, 6] },
                { loc: [6, 11] },
                { loc: [0, 18] },
                { loc: [0, 18], note: "http://codepen.io/RobbertWolfs/pen/ygOwKo" }
              ]}
            />         
   <Slide transition={["slide"]} bgImage={images.coding2.replace("/", "")} bgDarken={0.5}>
           
      <Heading size={1} textSize="2em" caps>
          DEMO
            </Heading>
          </Slide>

           <Slide transition={["fade"]} bgImage={images.questions.replace("/", "")} bgDarken={0.5}>
           
      <Heading size={1} textSize="2.5em" caps>
          Q&A
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
