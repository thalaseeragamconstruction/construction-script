
export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Civil';
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
