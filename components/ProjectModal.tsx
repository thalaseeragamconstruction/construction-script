
import React from 'react';
import { X, CheckCircle2, Calendar, MapPin, Ruler } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-black text-slate-900 font-display mb-4">{project.title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {project.description} We utilized high-grade structural steel and eco-friendly concrete mixtures to ensure both durability and sustainability for this landmark development.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-600" size={20} />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Started</p>
                  <p className="text-sm font-bold text-slate-900">Nov 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-600" size={20} />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Location</p>
                  <p className="text-sm font-bold text-slate-900">Chennai</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ruler className="text-orange-600" size={20} />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Floor Area</p>
                  <p className="text-sm font-bold text-slate-900">6300 sqft</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600" size={20} />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Status</p>
                  <p className="text-sm font-bold text-slate-900">Ground Floor Roof</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                window.location.href = '#contact';
              }}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg"
            >
              Inquire About Similar Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
