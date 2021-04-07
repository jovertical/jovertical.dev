import ExternalLink from '@/components/ExternalLink';
import Card from '@/components/Card';
import CardText from '@/components/CardText';
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ExternalLinkIcon from '@/components/icons/ExternalLink';
import Project from '@/models/Project';

export default function Projects({ projects }) {
    return (
        <Layout>
            <PageHeader
                title="Projects"
                description="Being a part of a project in other companies pays the bills but are usually not that fun, so here's my side projects over the years. I did web projects for the majority but I made some mobile apps too."
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 -mx-4 md:-mx-6">
                {projects.map((project) => (
                    <Card key={project.id} title={project.name}>
                        <CardText className="mt-2">
                            {project.description}
                        </CardText>

                        <div className="mt-6 flex space-x-4">
                            {project.websiteLink && (
                                <ProjectExternalLink
                                    href={project.websiteLink}
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
                    </Card>
                ))}
            </div>
        </Layout>
    );
}

function ProjectExternalLink({ href, label, className, ...props }) {
    return (
        <ExternalLink
            className={cx(
                'inline-flex items-center text-gray dark:text-gray-light hover:text-blue dark:hover:text-turquoise',
                className,
            )}
            href={href}
            {...props}
        >
            <span>{label}</span>

            <Icon className="ml-1" size="small" variant="outlined">
                <ExternalLinkIcon />
            </Icon>
        </ExternalLink>
    );
}

export async function getStaticProps() {
    return {
        props: {
            projects: await Project.get(),
        },
    };
}
