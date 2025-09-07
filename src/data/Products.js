export const categories = [
  { 
    id: 1, 
    name: 'Футболки', 
    slug: 't-shirts', 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Джинсы', 
    slug: 'jeans', 
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Платья', 
    slug: 'dresses', 
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=200&fit=crop' 
  },
  { 
    id: 4, 
    name: 'Куртки', 
    slug: 'jackets', 
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop' 
  },
  { 
    id: 5, 
    name: 'Аксессуары', 
    slug: 'accessories', 
    image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=300&h=200&fit=crop' 
  }
]

export const products = [
  {
    id: 1,
    name: 'Белая хлопковая футболка',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    category: 't-shirts',
    description: 'Мягкая хлопковая футболка премиум-качества. Идеально для повседневной носки. 100% хлопок, не садится после стирки.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Черный', 'Серый'],
    inStock: true
  },
  {
    id: 2,
    name: 'Синие скинни джинсы',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
    category: 'jeans',
    description: 'Стильные облегающие джинсы из качественного денима. Удобная посадка, прочная ткань. Идеально сочетаются с любой обувью.',
    sizes: ['28', '30', '32', '34'],
    colors: ['Синий', 'Темно-синий', 'Черный'],
    inStock: true
  },
  {
    id: 3,
    name: 'Красное летнее платье',
    price: 4599,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
    category: 'dresses',
    description: 'Легкое платье для летнего сезона. Отлично подходит для пляжа, прогулок и вечеринок. Свободный крой, дышащая ткань.',
    sizes: ['S', 'M', 'L'],
    colors: ['Красный', 'Розовый', 'Желтый'],
    inStock: true
  },
  {
    id: 4,
    name: 'Кожаная куртка',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop',
    category: 'jackets',
    description: 'Стильная кожаная куртка премиум-качества. Натуральная кожа, теплая подкладка. Защита от ветра и непогоды.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Черный', 'Коричневый'],
    inStock: true
  },
  {
    id: 5,
    name: 'Кожаный ремень',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop',
    category: 'accessories',
    description: 'Качественный кожаный ремень с металлической пряжкой. Универсальный аксессуар для любого стиля.',
    sizes: ['S', 'M', 'L'],
    colors: ['Коричневый', 'Черный'],
    inStock: true
  },
  {
    id: 6,
    name: 'Спортивные штаны',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1506629905877-52a5ca6d63b1?w=300&h=300&fit=crop',
    category: 't-shirts',
    description: 'Удобные спортивные штаны для тренировок и отдыха. Эластичная ткань, удобный крой.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Серый', 'Черный', 'Синий'],
    inStock: true
  },
  {
    id: 7,
    name: 'Джинсовая рубашка',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=300&fit=crop',
    category: 'jackets',
    description: 'Классическая джинсовая рубашка. Универсальный предмет гардероба, подходит для любого сезона.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Синий', 'Светло-синий'],
    inStock: true
  },
  {
    id: 8,
    name: 'Сумка через плечо',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    category: 'accessories',
    description: 'Стильная сумка через плечо. Вместительный основной отдел, несколько карманов. Идеально для повседневного использования.',
    sizes: ['One Size'],
    colors: ['Черный', 'Коричневый', 'Синий'],
    inStock: true
  }
]