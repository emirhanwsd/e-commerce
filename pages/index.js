import Head from "next/head";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import logo from "../public/logo.png";

const product = {
  name: "Application UI Icon Pack",
  version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
  price: 220,
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  imageSrc: "/product/application-ui-icon-pack.jpg",
};

const relatedProducts = [
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: 49,
    imageSrc: "/product/fusion-ui-kit.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>

      <div className="bg-white">
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <img className="h-8 w-auto" src="/logo.png" alt="" />
                  </a>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 transition-colors"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors">
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:row-end-1 lg:col-span-4">
              <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt=""
                  className="object-center object-cover"
                />
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                </div>

                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          "text-yellow-400",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-500 mt-6">{product.description}</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 transition-colors"
                >
                  Pay ${product.price}
                </button>
                <button
                  type="button"
                  className="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                >
                  Preview
                </button>
              </div>

              <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-24 lg:max-w-none">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-medium text-gray-900">
                Customers also viewed
              </h2>
              <a
                href="#"
                className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <div key={product.id} className="relative group">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100 group">
                    <img
                      src={product.imageSrc}
                      alt=""
                      className="object-center object-cover group-hover:opacity-75 transition-opacity"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                    <h3>
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p>${product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 py-10 text-center">
              <p className="text-sm text-gray-500">made with ♥.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
