import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import { education } from "@/lib/data"
import SplitText from "../ui/SplitText"

export function EducationTab() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    My educational journey in computer science and software development
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {education.map((edu, index) => (
                    <Card
                        key={edu.school}
                        className={`enhanced-shadow card-hover card-gradient`}
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                    
                                    <SplitText
                                        text={edu.school}
                                        className="text-2xl font-semibold text-center"
                                        delay={100}
                                        duration={0.6}
                                        ease="power3.out"
                                        splitType="chars"
                                        from={{ opacity: 0, y: 40 }}
                                        to={{ opacity: 1, y: 0 }}
                                        threshold={0.1}
                                        rootMargin="-100px"
                                        textAlign="center"
                                        // onLetterAnimationComplete={handleAnimationComplete}
                                    />
                                </div>
                                <Badge variant="outline">{edu.period}</Badge>
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium mb-2">{edu.degree}</p>
                            <p className="text-muted-foreground">{edu.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
} 