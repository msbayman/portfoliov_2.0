import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { contactInfo, socialLinks } from "@/lib/data"

const iconMap = {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
}

export function ContactTab() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-8 animate-slide-up">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm always interested in new opportunities and exciting projects. Feel free to reach out!
                </p>
            </div>

            <div className="max-w-2xl mx-auto animate-slide-up animation-delay-200">
                <Card className="enhanced-shadow card-hover transition-all duration-500 card-gradient">
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Contact Information</h3>

                                <div className="space-y-3">
                                    {contactInfo.map((contact, index) => {
                                        const IconComponent = iconMap[contact.icon as keyof typeof iconMap]
                                        return (
                                            <div
                                                key={contact.label}
                                                className={`flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all duration-300 hover:scale-105 animate-slide-right enhanced-shadow`}
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <IconComponent className="w-5 h-5 text-primary" />
                                                <div>
                                                    <p className="font-medium">{contact.label}</p>
                                                    {contact.href ? (
                                                        <a href={contact.href} className="text-muted-foreground hover:text-primary">
                                                            {contact.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-muted-foreground">{contact.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Social Links</h3>

                                <div className="space-y-3">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                                        return (
                                            <Button
                                                key={social.label}
                                                variant="outline"
                                                className={`w-full justify-start btn-outline hover:scale-105 transition-all duration-300 animate-slide-left`}
                                                style={{ animationDelay: `${index * 100}ms` }}
                                                asChild
                                            >
                                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                    <IconComponent className="w-5 h-5 mr-3" />
                                                    {social.label}
                                                </a>
                                            </Button>
                                        )
                                    })}
                                </div>

                                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors duration-300 animate-scale-in animation-delay-400 enhanced-shadow">
                                    <h4 className="font-semibold text-primary mb-2">Available for</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Full-time opportunities</li>
                                        <li>• Freelance projects</li>
                                        {/* <li>• Collaboration</li>
                                        <li>• Mentorship</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center animate-slide-up animation-delay-600">
                            <Button size="lg" asChild className="btn-primary hover:scale-105 transition-transform duration-300">
                                <a href="mailto:msaoubayman@gmail.com">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Send me an email
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 