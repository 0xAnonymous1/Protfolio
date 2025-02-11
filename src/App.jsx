/* The above code is a React component that represents a single-page portfolio website for a React
developer. Here is a summary of what the code is doing: */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Boxes, Rocket, Star, ShoppingCart, ClipboardList, GitBranch, Globe, Database, Lock, LayoutGrid, Zap, Frame, Palette, Box, Repeat, Server, Layers, GitFork, Workflow, FileJson, Flame, Menu, X } from 'lucide-react';

 
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * The useEffect hook in React is used to set up a scroll event listener that updates the state based
   * on the scroll position.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    /* The above code is setting up a scroll event listener in a React component. When the user scrolls
    the window, the `handleScroll` function will be called. The `useEffect` hook is used to add the
    event listener when the component mounts, and remove it when the component unmounts (cleanup
    function). The empty dependency array `[]` ensures that the event listener is only added once
    when the component mounts. */
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * The scrollToSection function scrolls the window to a specified section with a smooth behavior and
   * closes the menu if it is open.
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  /* The above code defines two animation objects using the Framer Motion library in JavaScript React. */
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    /* The above code is a React application that creates a single-page website for a React Developer.
    Here is a summary of what the code is doing: */
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
  

   <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ReactDev
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          <motion.div 
            animate={{ height: isMenuOpen ? "auto" : 0 }}
            className="md:hidden overflow-hidden"
          
          >
            <div className="py-4 space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  className="block"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors w-full text-left py-2"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </nav>
        {/* hero section */}
      <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              React Developer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Crafting exceptional web experiences with modern technologies
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              {[
                { href: "https://github.com/0xAnonymous1", icon: <Github size={24} /> },
                { href: "https://linkedin.com", icon: <Linkedin size={24} /> },
                { href: "thenorthboys.dev@gmail.com", icon: <Mail size={24} /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </header>

      <section id="skills" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Code2 className="w-8 h-8 mb-4" />, 
                title: 'Frontend Development', 
                skills: [
                  { icon: <LayoutGrid size={16} />, name: 'React' },
                  { icon: <Zap size={16} />, name: 'TypeScript' },
                  { icon: <Frame size={16} />, name: 'Next.js' },
                  { icon: <Palette size={16} />, name: 'Tailwind CSS' }
                ] 
              },
              { 
                icon: <Boxes className="w-8 h-8 mb-4" />, 
                title: 'State Management', 
                skills: [
                  { icon: <Box size={16} />, name: 'Redux' },
                  { icon: <Repeat size={16} />, name: 'React Query' },
                  { icon: <Server size={16} />, name: 'Context API' },
                  { icon: <Layers size={16} />, name: 'Zustand' }
                ] 
              },
              { 
                icon: <Rocket className="w-8 h-8 mb-4" />, 
                title: 'Tools & Deployment', 
                skills: [
                  { icon: <GitFork size={16} />, name: 'Git' },
                  { icon: <Box size={16} />, name: 'Webpack' },
                  { icon: <Zap size={16} />, name: 'Vite' },
                  { icon: <Workflow size={16} />, name: 'CI/CD' }
                ] 
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="text-blue-400">{skill.icon}</span>
                      {skill.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Fatguess',
                description: 'A full-featured online store built with React and Redux',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
                tags: [
                  { icon: <LayoutGrid size={14} />, name: 'React' },
                  { icon: <Box size={14} />, name: 'Redux' },
                  { icon: <Server size={14} />, name: 'Node.js' }
                ],
                features: [
                  { icon: <ShoppingCart className="w-4 h-4" />, text: 'Cart & Checkout' },
                  { icon: <Database className="w-4 h-4" />, text: 'Product Management' },
                  { icon: <Lock className="w-4 h-4" />, text: 'Secure Payments' },
                ],
              },
              {
                title: 'beuran',
                description: 'fornt end using react',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
                tags: [
                  { icon: <LayoutGrid size={14} />, name: 'React' },
                  { icon: <Flame size={14} />, name: 'Firebase' },
                  { icon: <Palette size={14} />, name: 'Tailwind' }
                ],
                features: [
                  { icon: <ClipboardList className="w-4 h-4" />, text: 'Task Organization' },
                  { icon: <GitBranch className="w-4 h-4" />, text: 'Real-time Updates' },
                  { icon: <Globe className="w-4 h-4" />, text: 'Team Collaboration' },
                ],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg bg-gray-800"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-64" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <motion.span whileHover={{ rotate: 45 }}>
                      <ExternalLink className="w-4 h-4" />
                    </motion.span>
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <span className="text-blue-400">{feature.icon}</span>
                          {feature.text}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full flex items-center gap-1"
                      >
                        {tag.icon}
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Star className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work and full-time opportunities.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2025 React Developer. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
