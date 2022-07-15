import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>Atomic Habits</Link>
                </li>
                <li>
                    <Link to='/products/p2'>The Psychology of Money</Link>
                </li>
                <li>
                    <Link to='/products/p3'>Ikigai</Link>
                </li>
                <li>
                    <Link to='/products/p4'>Let Us C</Link>
                </li>
            </ul>
        </section>
    );
}

export default Products;