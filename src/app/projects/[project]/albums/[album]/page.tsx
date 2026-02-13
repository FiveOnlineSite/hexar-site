import { projects } from "@/src/data/projects";
import ImagesSlider from "@/src/components/Albums/ImagesSlider";
import AlbumsArrow from "@/src/components/Albums/AlbumsArrow";
import ProjectsArrow from "@/src/components/Albums/ProjectsArrow";

interface AlbumsPageProps {
  params: Promise<{ project: string; album: string }>;
}

export default async function ProjectAlbumsPage({ params }: AlbumsPageProps) {
  const { project, album } = await params;

  const currentproject = projects.find(
    (c) => c.slug === project
  );

  if (!currentproject) {
    return <h1>project Not Found</h1>;
  }

  const currentAlbum = currentproject.albums.find(
    (a) => a.slug === album
  );

  if (!currentAlbum) {
    return <h1>Album Not Found</h1>;
  }

  return (
    <div className="album-banner-section min-h-screen lg:pt-20 md:pt-16 pt-8 relative">
<ImagesSlider images={currentAlbum.images} />

      <AlbumsArrow
        projectSlug={currentproject.slug}
        albums={currentproject.albums}
        currentAlbumSlug={album} 
        basePath="projects"
      />
      
      <ProjectsArrow projectSlug={currentproject.slug}/>
    
    </div>
      
  );
}
