import ExternalLink from '@/components/ExternalLink'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import Layout from '@/components/Layout'
import ExternalLinkIcon from '@/components/icons/ExternalLink'
import * as query from '@/queries/project'

export default function Projects({ projects }) {
  return (
    <Layout>
      <Header
        title="Projects"
        description="Being a part of a project in other companies pays the bills but are usually not that fun, so here's my side projects over the years. I did web projects for the majority but I made some mobile apps too."
      />

      <div className="mt-6">
        {projects.map((project) => (
          <article className="mt-8" key={project.id}>
            <h1 className="text-lg text-primary dark:text-primary-dark font-bold no-underline">
              {project.name}
            </h1>

            <p className="mt-2 text-tertiary dark:text-tertiary-dark leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="mt-6 flex space-x-4">
              {project.websiteLink && (
                <ProjectExternalLink
                  href={project.githubLink}
                  label="Website"
                  title="Visit website"
                />
              )}

              {project.githubLink && (
                <ProjectExternalLink
                  href={project.githubLink}
                  label="Github"
                  title="View source in Github"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

function ProjectExternalLink({ href, label, className, ...props }) {
  return (
    <ExternalLink
      className="inline-flex items-center text-accent dark:text-accent-dark"
      href={href}
      {...props}
    >
      <span>{label}</span>

      <Icon className="ml-1" size="small" variant="outlined">
        <ExternalLinkIcon />
      </Icon>
    </ExternalLink>
  )
}

export async function getStaticProps() {
  const projects = await query.all()

  return {
    props: { projects },
  }
}
