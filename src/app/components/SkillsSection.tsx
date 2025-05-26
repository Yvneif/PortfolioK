'use client';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiMysql, 
  SiCss3,
  SiHtml5, 
  SiPhp,
  SiCisco,
  SiTableau,
  SiSap
} from 'react-icons/si';
import { FaJava, FaChartLine } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'Python', icon: <SiPython className="text-blue-400" /> },
  { name: 'React', icon: <SiReact className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-green-600" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-300" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'PHP', icon: <SiPhp className="text-purple-500" /> },
  { name: 'Cisco Infrastructure', icon: <SiCisco className="text-blue-500" /> },
  { name: 'Machine Learning', icon: <FaChartLine className="text-pink-500" /> },
  { name: 'Tableau', icon: <SiTableau className="text-blue-700" /> },
  { name: 'SAP Analytics Cloud', icon: <SiSap className="text-blue-400" /> }
];

export default function SkillsSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700"
            >
              <div className="text-4xl mb-3">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-center dark:text-gray-200">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}