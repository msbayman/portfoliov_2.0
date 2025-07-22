import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Download } from "lucide-react"
import Image from "next/image"
import { expertiseAreas } from "@/lib/data"
import DecryptedText from "../ui/DecryptedText"

export function IntroductionTab() {
    return (
        <div className="text-center py-12">
            <div className="mb-8 flex justify-center items-center">
                <div className="relative inline-block">
                    <Image
                        src="/images/ayman-profile.png"
                        alt="Ayman Msaoub"
                        width={250}
                        height={250}
                        className="rounded-full border-4 border-primary/20 shadow-lg profile-image"
                    />
                    <Button
                        size="icon"
                        asChild
                        className="rounded-full btn-primary shadow-lg absolute right-2 bottom-2"
                    >
                        <a href="/web_dev_amsaoub.pdf" download aria-label="Ayman_Msaoub_cv_Web_Dev">
                            <Download className="w-7 h-7" />
                        </a>
                    </Button>
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-slide-up">
                <DecryptedText
                    text="Ayman Msaoub"
                    speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animation-delay-200">
                
                <DecryptedText
                    text="Web Developer & Software Engineer"
                    speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                />
            </p>

            <div className="max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-400">
                <Card className="p-6 enhanced-shadow card-hover transition-all duration-500 hover:scale-[1.02] card-gradient">
                    <CardContent className="pt-0">
                        <h3 className="text-2xl font-semibold mb-4">Welcome to My Portfolio</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Hello! I'm Ayman, a dedicated software engineer currently at level 11.36 in the prestigious 1337
                            coding school (42 Network). I've successfully completed the entire core curriculum with
                            exceptional grades, mastering everything from low-level systems programming to full-stack web
                            development. With 15+ major projects under my belt, I specialize in creating efficient, scalable
                            solutions across multiple domains.
                        </p>
                        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                            {expertiseAreas.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all duration-300 hover:scale-105 animate-slide-up enhanced-shadow`}
                                    style={{ animationDelay: `${600 + index * 100}ms` }}
                                >
                                    <h4 className="font-semibold text-primary">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-800">
                <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300 btn-primary">
                    <a href="mailto:msaoubayman@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ayman,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed%20with%20your%20work.%20I'd%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20conversation.%0D%0A%0D%0ABest%20regards">
                        <Mail className="w-5 h-5 mr-2" />
                        Get In Touch
                    </a>
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover:scale-105 transition-transform duration-300 btn-outline bg-transparent"
                >
                    <a href="https://www.github.com/msbayman" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View GitHub
                    </a>
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover:scale-105 transition-transform duration-300 btn-outline bg-transparent"
                >
                    <a href="https://www.linkedin.com/in/ayman-msaoub/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn Profile
                    </a>
                </Button>
            </div>
        </div>
    )
} 