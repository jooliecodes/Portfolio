interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  video?: string;
  mediaType?: 'image' | 'iframe' | 'video';
  imageAlt?: string;
  iframeSrc?: string;
  iframeTitle?: string;
  projectUrl: string;
  technologies: string[];
  bgColor?: string;
  hoverColor?: string;
}


export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
  technologies,
  bgColor = "bg-pink-200",
  hoverColor = "hover:bg-sky-200",
  mediaType,
  iframeSrc,
  iframeTitle
}: ProjectCardProps
) {
  const techColors: Record<string, string> = {
    react: 'bg-blue-500 text-white',
    javascript: 'bg-yellow-400 text-black',
    typescript: 'bg-blue-600 text-white',
    python: 'bg-green-600 text-white',
    css: 'bg-teal-500 text-white',
    tailwind: 'bg-teal-500 text-white',
    node: 'bg-green-700 text-white',
    html: 'bg-orange-500 text-white',
    java: 'bg-red-600 text-white',
    vite: 'bg-purple-600 text-white',
    mui: 'bg-indigo-500 text-white',
    material: 'bg-indigo-500 text-white',
    three: 'bg-gray-700 text-white',
    blender: 'bg-orange-700 text-white',
    azure: 'bg-cyan-700 text-white',
    seo: 'bg-rose-600 text-white',
    stripe: 'bg-purple-500 text-white',
    quickbooks: 'bg-green-500 text-white',
    figma: 'bg-pink-500 text-white',
  };

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();

    for (const keyword in techColors) {
      if (techLower.includes(keyword)) {
        return techColors[keyword];
      }
    }

    return 'bg-gray-900 text-white'; // default fallback
  };

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bgColor} mt-10 text-base`}>
      <a
        href={projectUrl}
        className={`${hoverColor} text-xs`}
      >
        {projectUrl}
        {mediaType === 'image' ? (
          <img
            className="w-full"
            src={imageUrl}
            alt={imageAlt}
          />
        ) : (
          <iframe
            src={iframeSrc}
            className="w-full"
            height="190.08px"
            allowFullScreen
            title={iframeTitle}
          />
        )}
  
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title.toUpperCase()}
          </div>
          <p className="text-gray-900 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technologies.map((tech, index) => (
            <span key={index}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${getTechColor(tech)}`}
            >
              #{tech}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}