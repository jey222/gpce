export interface Article {
  id: string;
  category: string;
  classification: string;
  date: string;
  title: string;
  excerpt: string;
  content: string; // Contenu complet HTML/Texte
  imageUrl: string;
  author: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Minister {
  id: string;
  department: string; // Nom du Ministère (Gros)
  name: string; // Nom du Ministre (Petit)
  role: string;
  shortDesc: string;
  fullBio: string;
  missions: string[];
  image: string;
  icon: any;
  isPremier?: boolean;
}