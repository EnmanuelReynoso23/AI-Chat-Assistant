import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

interface ProfileInfo {
  name: string;
  role: string;
  email: string;
  location: string;
  avatarUrl: string;
  description: string;
}

const profileInfo: ProfileInfo = {
  name: "Enmanuel Reynoso",
  role: "Desarrollador de Software",
  email: "reynosoenmanuel166@gmail.com",
  location: "República Dominicana",
  avatarUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  description: "¡Bienvenido a mi asistente de chat con IA! Esta aplicación te permite mantener conversaciones interactivas y cargar documentos PDF para obtener respuestas contextualizadas. Utiliza el tema claro/oscuro según tu preferencia y disfruta de una experiencia de chat intuitiva y eficiente."
};

export function ProfileSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <img
          src={profileInfo.avatarUrl}
          alt={profileInfo.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {profileInfo.name}
          </h2>
          <p className="text-blue-500 dark:text-blue-400 text-lg">{profileInfo.role}</p>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>{profileInfo.email}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{profileInfo.location}</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-start gap-2">
              <MessageCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {profileInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}