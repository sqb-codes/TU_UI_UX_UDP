import './App.css';
import imgLogo from './assets/images/img-logo.png';
import { PRODUCTS_DATA } from './data';

const name = "John Smith";

// Header is a component now
function Header() {
  return (
    <header>
      <h1>Hello {name} from React</h1>
      <p>This is a sample text</p>
      {/* <img src={imgLogo} alt="Text" /> */}
    </header>
  )
}

// Props - components can receive data from parent component through props
// function Product(props) {
//   return (
//     <li>
//       <img src={props.image} alt="product image"/>
//       <h3>Product title : {props.title}</h3>
//       <p>Product Description : {props.description}</p>
//       <p>Product Price : {props.price}</p>
//     </li>
//   )
// }

// Object Destructuring
function Product({image, title, description, price}) {
  return (
    <li>
      <img src={image} alt="product image"/>
      <h3>Product title : {title}</h3>
      <p>Product Description : {description}</p>
      <p>Product Price : {price}</p>
    </li>
  )
}

function App() {
  // return <h1>Hello from React</h1>
  return (
    <div>
      <Header/>
      <main>
        <h2>This is products section</h2>
        <ul>
          {/* <Product 
          title="p1"
          productName = "Apple IPhone 14"
          productPrice = "45000"
          description = "This is Apple Iphone 14 with best camera"
          image = {imgLogo}
          /> */}

          {/* <Product 
          title="P1"
          productName = {PRODUCTS_DATA[0].title}
          productPrice = {PRODUCTS_DATA[0].price}
          description = {PRODUCTS_DATA[0].description}
          image = {PRODUCTS_DATA[0].image}
          /> */}

          <Product {...PRODUCTS_DATA[0]}/>
          <Product {...PRODUCTS_DATA[1]}/>
          

        </ul>
      </main>
    </div>
  )
}

export default App;
