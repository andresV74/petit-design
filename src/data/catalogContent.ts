const categoryImages: Record<string, string> = {
  'lenceria': '/products/product-1.jpeg',
  'accesorios': '/products/product-9.jpeg',
};

export const catalogContent = {
	es: {
		pageTitle: 'Catálogo',
		allButtonText: 'Todos los Productos',
		noProducts: 'No hay productos disponibles en esta categoría todavía.',
		allProducts: 'Ver todos los productos',
		categories: [
			{
				title: 'Accesorios para la habitación del bebé',
				menuTitle: 'Accesorios',
				slug: 'accesorios',
				image_url: categoryImages['accesorios'],
				description: 'Accesorios especiales para complementar el set de tu bebé',
			},
			{
				title: 'Lencería de Cunas y Cama Cunas',
				menuTitle: 'Lencería de Cunas',
				slug: 'lenceria-cuna',
				image_url: categoryImages['lenceria'],
				description: 'Ropa de cama delicada para los primeros sueños de tu bebé',
			},
			{
				title: 'Kits',
				menuTitle: 'Kits',
				slug: 'kits',
				image_url: '',
				description: 'Sets completos personalizados para el nacimiento y primeros meses del bebé',
			},
		],
	},
	en: {
		pageTitle: 'Catalog',
		allButtonText: 'All Products',
		noProducts: 'No products available in this category yet.',
		allProducts: 'View all products',
		categories: [
			{
				title: 'Linen Accessories',
				menuTitle: 'Accessories',
				slug: 'accesorios',
				image_url: categoryImages['accesorios'],
				description: 'Special accessories to complement your baby\'s set',
			},
			{
				title: 'Crib and Toddler Bed Linens',
				menuTitle: 'Crib Linens',
				slug: 'lenceria-cuna',
				image_url: categoryImages['lenceria'],
				description: 'Delicate bedding for your baby\'s first dreams',
			},
			{
				title: 'Kits',
				menuTitle: 'Kits',
				slug: 'kits',
				image_url: '',
				description: 'Complete personalized sets for birth and baby\'s first months',
			},
		],
	},
};
