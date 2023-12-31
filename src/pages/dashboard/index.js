import { useState } from 'react';

// Endpoints API
import { endPoints } from '@services/api';

// Custom hooks
import { useAuth } from '@hooks/useAuth';
import { useFetch } from '@hooks/useFetch';

// Components
import Loading from '@common/Loading';
import Pagination from '@common/Pagination';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 10;
const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const [offset, setOffset] = useState(PRODUCT_OFFSET);

  // Obteniendo las funciones y estados del contexto
  const { user } = useAuth();

  const { data: products, loading, error } = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offset));

  const categoryProducts = products?.map((product) => product.category);
  const categoryNames = categoryProducts?.map((category) => category.name);

  // Si ya existe una categoria con ese nombre le sumamos 1, sino por defecto lo iniciamos en 1
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  // Objeto con la estructura necesaria para pintar las graficas
  const dataParser = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryNames),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Chart className="mb-8 mt-2" chartData={dataParser} />
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Id
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products?.map((product) => (
                        <tr key={`Product-item-${product.id}`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{product.category.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">$ {product.price}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/delete" className="text-indigo-600 hover:text-indigo-900">
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Pagination offset={offset} setOffset={setOffset} />
          </div>
        </>
      )}
    </>
  );
}
