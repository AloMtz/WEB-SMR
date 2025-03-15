export interface NavItem {
  label: string;
  href: string;
}

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  imagen: string;
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  imagenAntes?: string;
  imagenDespues?: string;
}

export interface Testimonio {
  id: string;
  nombre: string;
  empresa: string;
  comentario: string;
  calificacion: number;
  imagen: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  size: 'small' | 'large' | 'wide' | 'tall';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
}