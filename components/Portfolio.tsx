
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail,
  Server,
  Download,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  BookOpen,
  Languages,
  Heart
} from 'lucide-react';
import { 
  profileData, 
  skillsData, 
  projectsData, 
  certificationsData,
  educationData,
  languagesData,
  interestsData
} from '../data';

export default function Portfolio() {
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    window.dispatchEvent(new Event('storage'));
  };

  const isDark = theme === 'dark';
  const bg = isDark ? 'bg-slate-950' : 'bg-gray-50';
  const text = isDark ? 'text-slate-100' : 'text-gray-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-white';
  const cardBorder = isDark ? 'border-white/10' : 'border-gray-200';
  const sectionBg = isDark ? 'bg-slate-900/50' : 'bg-gray-50';

  // Separation of projects by type
  const professionalExp = Object.values(projectsData).filter((p: any) => p.type === 'professional');
  const academicProjects = Object.values(projectsData).filter((p: any) => p.type === 'academic');

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300 font-sans`}>
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'} rounded-full blur-3xl`} />
        <div className={`absolute top-1/2 -left-40 w-96 h-96 ${isDark ? 'bg-blue-600/10' : 'bg-blue-600/5'} rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 right-1/4 w-64 h-64 ${isDark ? 'bg-purple-600/10' : 'bg-purple-600/5'} rounded-full blur-3xl`} />
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b ${isDark ? 'border-white/5 bg-slate-950/80' : 'border-gray-200 bg-white/80'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={createPageUrl('Portfolio')} className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <Server className="w-5 h-5" />
            </div>
            <span>{profileData.name.split(' ')[0]}<span className="text-cyan-500">Portfolio</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="#about" className={`${textMuted} hover:text-cyan-500 transition-colors`}>Profil</a>
              <a href="#formations" className={`${textMuted} hover:text-cyan-500 transition-colors`}>Formations</a>
              <a href="#experiences" className={`${textMuted} hover:text-cyan-500 transition-colors`}>Expériences</a>
              <a href="#competences" className={`${textMuted} hover:text-cyan-500 transition-colors`}>Compétences</a>
            </nav>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Profil) */}
      <section id="about" className="relative pt-20 pb-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left order-2 md:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              {profileData.title}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              {profileData.name}
            </h1>
            
            <h2 className={`text-xl font-semibold mb-6 ${text}`}>RÉSUMÉ DE PROFIL</h2>
            <p className={`text-lg ${textMuted} max-w-lg mb-8 leading-relaxed`}>
              {profileData.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-white text-slate-900 hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800'} font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-500/20`}>
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-[#0077b5] text-white hover:bg-[#006396]' : 'bg-[#0077b5] text-white hover:bg-[#006396]'} font-medium transition-all hover:scale-105`}>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
            <div className={`mt-6 flex flex-col md:flex-row gap-2 md:gap-6 text-sm ${textMuted}`}>
              <span>{profileData.email}</span>
              <span className="hidden md:inline">•</span>
              <span>{profileData.phone}</span>
              <span className="hidden md:inline">•</span>
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                {/* Decorative rings */}
                <div className={`absolute inset-0 rounded-full border-2 ${isDark ? 'border-cyan-500/20' : 'border-cyan-500/10'} scale-110 transition-transform duration-700 group-hover:scale-115`} />
                <div className={`absolute inset-0 rounded-full border-2 ${isDark ? 'border-blue-500/20' : 'border-blue-500/10'} scale-125 transition-transform duration-700 group-hover:scale-130`} />
                
                {/* Main Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800">
                  <img 
                    src={profileData.avatarUrl} 
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className={`py-20 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <GraduationCap className="w-8 h-8 text-cyan-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Formations</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
             {educationData.map((edu, idx) => (
                <Card key={idx} className={`${cardBg} ${cardBorder} p-6 relative`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-cyan-500">{edu.school}</h3>
                        <p className={`font-semibold text-lg ${text}`}>{edu.degree}</p>
                    </div>
                    <Badge className="w-fit mt-2 sm:mt-0 text-sm px-3 py-1">{edu.year}</Badge>
                  </div>
                  {edu.description && (
                      <p className={`${textMuted} mt-2`}>{edu.description}</p>
                  )}
                </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Professional Experiences Section */}
      <section id="experiences" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-cyan-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Expériences Professionnelles</h2>
          </div>

          <div className="grid gap-8">
            {professionalExp.map((project: any) => {
              const Icon = project.icon;
              return (
                <Link key={project.id} to={createPageUrl('ProjectDetails') + `?id=${project.id}`} className="group">
                  <Card className={`${cardBg} ${cardBorder} p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/5`}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className={`p-4 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-gray-100'} text-cyan-500`}>
                                <Icon className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-500 transition-colors">
                                    {project.title}
                                </h3>
                                <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 whitespace-nowrap">
                                    {project.duration}
                                </Badge>
                            </div>
                            <p className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">{project.company}</p>
                            <p className={`${textMuted} mb-4`}>
                                {project.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.slice(0, 5).map((tech: string) => (
                                    <span key={tech} className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-700'}`}>
                                        {tech}
                                    </span>
                                ))}
                                <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-700'} group-hover:text-cyan-500`}>
                                    Voir plus &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Experience Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-cyan-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Expérience Académique</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map((project: any) => {
              const Icon = project.icon;
              return (
                <Link key={project.id} to={createPageUrl('ProjectDetails') + `?id=${project.id}`} className="group">
                  <Card className={`h-full ${cardBg} ${cardBorder} p-6 hover:border-cyan-500/50 transition-all duration-300`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'} text-cyan-500`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <ChevronRight className={`w-5 h-5 ${textMuted} group-hover:text-cyan-500`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className={`${textMuted} text-sm line-clamp-3 mb-4`}>
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                            <Badge key={tech} className={`text-xs font-normal ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                                {tech}
                            </Badge>
                        ))}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => {
              const Icon = category.icon;
              return (
                <Card key={idx} className={`${cardBg} ${cardBorder} p-6 hover:border-cyan-500/30 transition-all hover:-translate-y-1 duration-300`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className={`${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'} border-transparent text-sm py-1 px-3`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <Card key={idx} className={`${cardBg} ${cardBorder} p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${cert.bg} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 opacity-50`} />
                  
                  <div className={`mb-4 inline-flex p-3 rounded-xl ${cert.bg} ${cert.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                  <p className={`${textMuted} text-sm mb-4`}>{cert.issuer}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Languages and Interests Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <Languages className="w-6 h-6 text-cyan-500" />
                    <h2 className="text-2xl font-bold">Langues</h2>
                </div>
                <div className="space-y-4">
                    {languagesData.map((lang, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
                            <span className="font-medium">{lang.language}</span>
                            <span className={`${textMuted}`}>{lang.level}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interests */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <Heart className="w-6 h-6 text-red-500" />
                    <h2 className="text-2xl font-bold">Intérêts</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {interestsData.map((interest, idx) => (
                        <Badge key={idx} className={`text-base py-2 px-4 ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                            {interest}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDark ? 'border-white/5 bg-slate-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <Server className="w-5 h-5" />
              </div>
              <span>{profileData.name.split(' ')[0]}<span className="text-cyan-500">Portfolio</span></span>
            </div>
            
            <div className={`text-sm ${textMuted} text-center md:text-right`}>
              <p className="mb-2">© 2025 {profileData.name}. Tous droits réservés.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-4">
                <a href={profileData.linkedin} className="hover:text-cyan-500"><Linkedin className="w-4 h-4" /></a>
                <a href={profileData.github} className="hover:text-cyan-500"><Github className="w-4 h-4" /></a>
                <a href={`mailto:${profileData.email}`} className="hover:text-cyan-500"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
