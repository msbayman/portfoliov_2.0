import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import { projects, categories } from "@/lib/data"
import type { Project, Category } from "@/lib/types"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export function ProjectsTab() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [openImage, setOpenImage] = useState<string | null>(null)

    const filteredProjects =
        selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A showcase of my work across different technologies and domains
                </p>
            </div>

            {/* Project Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category, index) => (
                    <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`mb-2 ${selectedCategory === category.id ? "btn-primary" : "btn-outline"}`}
                    >
                        {category.label}
                    </Button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <Card
                        key={project.id}
                        className={`overflow-hidden enhanced-shadow card-hover card-gradient`}
                    >
                        {project.image && (
                            <Dialog open={openImage === project.image} onOpenChange={(open) => setOpenImage(open ? project.image : null)}>
                                <DialogTrigger asChild>
                                    <div className="aspect-video relative overflow-hidden cursor-pointer" onClick={() => setOpenImage(project.image!)}>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="flex items-center justify-center bg-transparent border-none shadow-none max-w-4xl">
                                    <div className="relative w-full h-[60vw] max-h-[80vh]">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-contain rounded-lg"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        )}
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                {project.title}
                                <Badge variant="outline" className="capitalize">
                                    {project.category}
                                </Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-200" title={project.description}>
                                {project.description}
                            </CardDescription>
                            <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                                <span>{project.date}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className={`text-xs`}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full btn-outline bg-transparent"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Project
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found in this category.</p>
                </div>
            )}
        </div>
    )
} 