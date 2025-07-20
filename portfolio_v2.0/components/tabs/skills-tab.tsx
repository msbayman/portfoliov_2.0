import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"
import { skills, skillCategories } from "@/lib/data"

export function SkillsTab() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Here are the technologies and tools I work with to bring ideas to life
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <Card
                        key={category.title}
                        className={`enhanced-shadow card-hover card-gradient`}
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code className="w-5 h-5" />
                                {category.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="hover:scale-110 transition-transform duration-200 hover:cursor-pointer hover:bg-accent hover:text-accent-foreground"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-center mb-6">All Technologies</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <Badge
                            key={skill}
                            variant="outline"
                            className="text-sm py-2 px-4 hover:scale-110 transition-transform duration-200 hover:cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
} 