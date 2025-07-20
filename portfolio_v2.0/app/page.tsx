"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import {
  User,
  Code,
  FolderOpen,
  GraduationCap,
  MessageCircle,
} from "lucide-react"

// Components
import { Header } from "@/components/header"
import { LoadingScreen } from "@/components/loading-screen"
import { IntroductionTab } from "@/components/tabs/introduction-tab"
import { SkillsTab } from "@/components/tabs/skills-tab"
import { ProjectsTab } from "@/components/tabs/projects-tab"
import { EducationTab } from "@/components/tabs/education-tab"
import { ContactTab } from "@/components/tabs/contact-tab"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("introduction")
  const [tabLoading, setTabLoading] = useState(false)

  // Initial loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Tab change loading simulation
  const handleTabChange = (value: string) => {
    if (value !== activeTab) {
      setTabLoading(true)
      setTimeout(() => {
        setActiveTab(value)
        setTabLoading(false)
      }, 300)
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content with Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-5 mb-8 tabs-list">
            <TabsTrigger
              value="introduction"
              className="flex items-center gap-2 tab-trigger"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Introduction</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2 tab-trigger">
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2 tab-trigger">
              <FolderOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2 tab-trigger">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2 tab-trigger">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          {tabLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Introduction Tab */}
          <TabsContent value="introduction" className={`space-y-8 ${tabLoading ? "hidden" : ""}`}>
            <IntroductionTab />
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className={`space-y-8 ${tabLoading ? "hidden" : ""}`}>
            <SkillsTab />
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className={`space-y-8 ${tabLoading ? "hidden" : ""}`}>
            <ProjectsTab />
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className={`space-y-8 ${tabLoading ? "hidden" : ""}`}>
            <EducationTab />
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className={`space-y-8 ${tabLoading ? "hidden" : ""}`}>
            <ContactTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
