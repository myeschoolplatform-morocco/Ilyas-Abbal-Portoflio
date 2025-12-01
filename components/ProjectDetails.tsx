
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Code,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data';

export default function ProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem('portfolio-theme') || 'dark');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const isDark = theme === 'dark';
  const bg = isDark ? 'bg-slate-950' : 'bg-gray-50';
  const text = isDark ? 'text-slate-100' : 'text-gray-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-white';
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200';
  
  // Cast to any to access by index/key safely
  const project = projectId ? (projectsData as any)[projectId] : null;

  if (!project) {
    return (
      <div className={`min-h-screen ${bg} ${text} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <p className={`${textMuted} mb-8`}>L'expérience ou le projet que vous recherchez n'existe pas.</p>
          <Link 
            to={createPageUrl('Portfolio') + '#projets'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className={`min-h-screen ${bg} ${text}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'} rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDark ? 'bg-blue-600/10' : 'bg-blue-600/5'} rounded-full blur-3xl`} />
      </div>

      {/* Header */}
      <header className={`relative z-10 border-b ${isDark ? 'border-white/5 bg-slate-950/80' : 'border-gray-200 bg-white/80'} backdrop-blur-xl sticky top-0`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            to={createPageUrl('Portfolio') + '#projets'}
            className={`inline-flex items-center gap-2 ${textMuted} hover:text-cyan-500 transition-colors`}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux expériences
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video max-h-[500px]">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  {project.category}
                </Badge>
              </div>
              <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-white'}`}>{project.title}</h1>
              <p className={`text-lg max-w-3xl ${isDark ? 'text-slate-300' : 'text-white/90'}`}>{project.shortDescription}</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div className={`flex items-center gap-2 ${textMuted}`}>
              <Calendar className="w-4 h-4 text-cyan-500" />
              <span>{project.date}</span>
            </div>
            <div className={`flex items-center gap-2 ${textMuted}`}>
              <Clock className="w-4 h-4 text-cyan-500" />
              <span>Durée: {project.duration}</span>
            </div>
            {project.links?.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${textMuted} hover:text-cyan-500 transition-colors`}
              >
                <Github className="w-4 h-4" />
                <span>Code Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${text}`}>
              <Code className="w-5 h-5 text-cyan-500" />
              Technologies & Outils
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge 
                  key={tech}
                  className={`px-4 py-2 ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <Card className={`${cardBg} ${cardBorder} p-6 md:p-8 mb-12`}>
            <h2 className={`text-xl font-semibold mb-4 ${text}`}>Description de la mission</h2>
            <p className={`leading-relaxed whitespace-pre-line ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
              {project.fullDescription}
            </p>
          </Card>

          {/* Challenges & Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Challenges */}
            <div>
              <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${text}`}>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Missions & Défis
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge: any, index: number) => (
                  <Card key={index} className={`p-5 ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                    <h3 className="font-semibold text-amber-500 mb-2">{challenge.title}</h3>
                    <p className={`text-sm ${textMuted}`}>{challenge.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${text}`}>
                <Lightbulb className="w-5 h-5 text-green-500" />
                Solutions & Réalisations
              </h2>
              <div className="space-y-4">
                {project.solutions.map((solution: any, index: number) => (
                  <Card key={index} className={`p-5 ${isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'}`}>
                    <h3 className="font-semibold text-green-500 mb-2">{solution.title}</h3>
                    <p className={`text-sm ${textMuted}`}>{solution.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <Card className={`p-6 md:p-8 mb-12 ${isDark ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200'}`}>
            <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${text}`}>
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              Impact & Résultats
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  </div>
                  <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>{result}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Navigation to other projects */}
          <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'} pt-12`}>
            <h2 className={`text-xl font-semibold mb-6 ${text}`}>Autres Expériences</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(projectsData)
                .filter((p: any) => p.id !== projectId)
                .slice(0, 3)
                .map((otherProject: any) => {
                  const OtherIcon = otherProject.icon;
                  return (
                    <Link 
                      key={otherProject.id}
                      to={createPageUrl('ProjectDetails') + `?id=${otherProject.id}`}
                    >
                      <Card className={`${cardBg} ${cardBorder} p-5 ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'} hover:border-cyan-500/30 transition-all group`}>
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                            <OtherIcon className="w-5 h-5" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className={`font-semibold ${text} truncate group-hover:text-cyan-500 transition-colors`}>
                              {otherProject.title}
                            </h3>
                            <p className={`${textMuted} text-sm truncate`}>{otherProject.category}</p>
                          </div>
                          <ChevronRight className={`w-5 h-5 ${textMuted} group-hover:text-cyan-500 transition-colors`} />
                        </div>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </div>
          </div>
          </section>

          {/* Footer */}
          <footer className={`relative z-10 py-8 border-t ${isDark ? 'border-white/5' : 'border-gray-200'} mt-12`}>
          <div className={`max-w-6xl mx-auto px-4 text-center ${textMuted} text-sm`}>
          <p>© 2025 Ilyas Abbal. Tous droits réservés.</p>
          </div>
          </footer>
          </div>
          );
          }
