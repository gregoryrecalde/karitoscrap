
interface Categoria {
  id: number;
  title: string;
}

interface CategoriasProductosProps {
  categorias: Categoria[];
  onClickCategoria: (categoriaId: number) => void;
}

const generateRandomPastelColor = (opacity: number) => {
  const hue = Math.floor(Math.random() * 360); // Tonos de 0 a 360
  const lightness = Math.floor(Math.random() * 20) + 70; // Claridad de 70 a 90
  return `hsla(${hue}, 100%, ${lightness}%, ${opacity})`; // Cambia a hsla para incluir la opacidad
};

const CategoriasProductos: React.FC<CategoriasProductosProps> = ({ categorias, onClickCategoria  }) => (
  <div className="text-center companies">
    {/* Categorías siempre en horizontal */}
    <div className="flex space-x-4 overflow-x-auto h-24" >
      {categorias.map((categoria) => (
          <div
            key={categoria.id}
            style={{
              backgroundColor: generateRandomPastelColor(0.3),
              borderRadius: "8px", // Bordes redondeados
              padding: "10px", // Ajusta el espaciado interno
              fontWeight: "bold", // Texto en negrita
              width: 'max-content',
              height: '80px',
              display: 'flex',
              alignItems: 'center', // Alinea verticalmente en el centro
            }}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => onClickCategoria(categoria.id)} 
          >
            {categoria.title}
          </div>
      ))}
    </div>
  </div>
);

export default CategoriasProductos;
