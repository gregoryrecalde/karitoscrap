"use client"
import Image from 'next/image'
import CustomLink from './components/custom-link'
import WidgetComponent from './components/widget';
import Link from 'next/link';
import Loader from './components/loader';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import CategoriasProductos from './components/categories';


const categorias = [
  {
    id: 0,
    title: 'Ver Todos'
  },
  {
    id:1,
    title: '⚡ Nuevas Creaciones'
  },
  {
    id: 2,
    title: '📚 Álbumes'
  },
  {
    id: 3,
    title: '💌 Tarjetería'
  },
  {
    id: 4,
    title: '🎁 Regalos'
  }
]
const links = [
  {
    href: '',
    title: 'Álbum Comunión 1',
    imageUrl: '/img/product.png',
    price: '85.00',
    categoriaId: 2
  },
  {
    href: '',
    title: 'Álbum Comunión 2',
    imageUrl: '/img/product-2.png',
    price: '85.00',
    categoriaId: 2
  },
  {
    href: '',
    title: 'Álbum Comunión 3',
    imageUrl: '/img/product-3.png',
    price: '80.00',
    categoriaId: 2
  },
  {
    href: '',
    title: 'Álbum Comunión 4',
    imageUrl: '/img/product-4.png',
    price: '85.00',
    categoriaId: 2
  }, {
    href: '',
    title: 'Pack Stickers 1',
    imageUrl: '/img/product-5.png',
    price: '85.00',
    categoriaId: 3
  },
  {
    href: '',
    title: 'Pack Stickers 2',
    imageUrl: '/img/product-6.png',
    price: '85.00',
    categoriaId: 3
  },
  {
    href: '',
    title: 'Pack Stickers 3',
    imageUrl: '/img/product-7.png',
    price: '80.00',
    categoriaId: 3
  },
  {
    href: '',
    title: 'Pack Stickers 4',
    imageUrl: '/img/product-8.png',
    price: '85.00',
    categoriaId: 1
  },
  // Agrega más objetos de enlace según sea necesario
];

export default function Home() {
  
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fakeAsyncLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    };

    fakeAsyncLoad();
  }, []);

  // Función para manejar el clic en una categoría
  const handleClickCategoria = (categoriaId: any) => {
    setCategoriaSeleccionada(categoriaId);
  };

  const [selectedLink, setSelectedLink] = useState(null);

  const handleOpenModal = (link:any) => {
    setSelectedLink(link);
  };

  const handleCloseModal = () => {
    setSelectedLink(null);
  };
  

  const productosFiltrados = links.filter((producto) => {
    // Si no hay categoría seleccionada, mostrar todos los productos
    if (!categoriaSeleccionada || categoriaSeleccionada == 0) {
      return true;
    }

    // Filtrar productos que pertenecen a la categoría seleccionada
    // Aquí deberías tener una propiedad 'categoriaId' en tus productos para comparar
    return producto.categoriaId === categoriaSeleccionada;
  });
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-animation" style={{overflowX: "hidden"}}>
      {loading && <Loader />}
      <div style={{position: "relative", zIndex: "2"}}>
        <div className="mb-12 z-10 max-w-full w-full items-center justify-between font-mono text-sm lg:flex logo">
        
        <Link href="/" >
          <Image
              className="relative"
              src="/img/logo.png"
              alt="Logo"
              width={240}
              height={64}
              priority
            />
        </Link>
        
          
        </div>
        <div className="mt-5 mb-8 ml-24 mr-24 grid lg:grid-cols-2 gap-8">
          <div>          
            <div className="mb-4">
              <h1 className="heading-medium">
                TENEMOS EL <span className="highlight-word-1">REGALO PERFECTO</span> PARA <span className="highlight-word-2">TODA OCASIÓN</span>
              </h1>
            </div>
            <div>
              <h2 className="heading-small">
              Detalles <span className="highlight-word-3">Personalizados</span> 🌸
              </h2>
            </div>
            
          </div>
          <WidgetComponent />
        </div>
        <div className="mt-5 mb-8 ml-24 mr-24  gap-8 ">
          <CategoriasProductos categorias={categorias}  onClickCategoria={handleClickCategoria} />
        </div>
        <div className="mt-5 mb-8 ml-24 mr-24 grid  lg:mb-2 lg:grid-cols-4 gap-4 ">
        {productosFiltrados.map((producto, index) => (
          <CustomLink
            key={index}
            href={producto.href}
            title={producto.title}
            imageUrl={producto.imageUrl}
            price={producto.price}
          />
        ))}
        </div>
        <Footer />
      </div>

      
      
    </main>
  )
}
