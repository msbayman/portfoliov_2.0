"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"
import {
  User,
  Code,
  FolderOpen,
  GraduationCap,
  MessageCircle,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Components
import { Header } from "@/components/header"
import { LoadingScreen } from "@/components/loading-screen"
import { IntroductionTab } from "@/components/tabs/introduction-tab"
import { SkillsTab } from "@/components/tabs/skills-tab"
import { ProjectsTab } from "@/components/tabs/projects-tab"
import { EducationTab } from "@/components/tabs/education-tab"
import { ContactTab } from "@/components/tabs/contact-tab"

const tabOrder = [
  "introduction",
  "skills",
  "projects",
  "education",
  "contact",
]

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("introduction")
  const [tabLoading, setTabLoading] = useState(false)
  // For animated menu bar
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tabsListRef = useRef<HTMLDivElement | null>(null)

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

  // Update underline position and width on tab or window resize or hover
  useLayoutEffect(() => {
    const targetTab = hoveredTab || activeTab
    const idx = tabOrder.indexOf(targetTab)
    const node = tabRefs.current[idx]
    const container = tabsListRef.current
    if (node && container) {
      const nodeRect = node.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setUnderline({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
      })
    }
  }, [activeTab, hoveredTab, isLoading])
  useEffect(() => {
    const handleResize = () => {
      const targetTab = hoveredTab || activeTab
      const idx = tabOrder.indexOf(targetTab)
      const node = tabRefs.current[idx]
      const container = tabsListRef.current
      if (node && container) {
        const nodeRect = node.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        setUnderline({
          left: nodeRect.left - containerRect.left,
          width: nodeRect.width,
        })
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeTab, hoveredTab, isLoading])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content with Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="relative">
            <TabsList ref={tabsListRef} className="grid w-full grid-cols-5 lg:grid-cols-5 mb-8 tabs-list relative bg-transparent">
              {tabOrder.map((tab, idx) => {
                const isActive = activeTab === tab
                const isHovered = hoveredTab === tab && !isActive
                return (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={`flex items-center gap-2 tab-trigger relative bg-transparent transition-colors duration-200 ${isActive || isHovered
                        ? 'bg-background text-foreground shadow-sm'
                        : ''
                      }`}
                    ref={el => {
                      tabRefs.current[idx] = el;
                    }}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    {tab === "introduction" && <><User className="w-4 h-4" /><span className="hidden sm:inline">Introduction</span></>}
                    {tab === "skills" && <><Code className="w-4 h-4" /><span className="hidden sm:inline">Skills</span></>}
                    {tab === "projects" && <><FolderOpen className="w-4 h-4" /><span className="hidden sm:inline">Projects</span></>}
                    {tab === "education" && <><GraduationCap className="w-4 h-4" /><span className="hidden sm:inline">Education</span></>}
                    {tab === "contact" && <><MessageCircle className="w-4 h-4" /><span className="hidden sm:inline">Contact</span></>}
                  </TabsTrigger>
                )
              })}
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 h-1 bg-primary rounded transition-all"
                style={{ left: 0 }}
                animate={{ left: underline.left, width: underline.width }}
                transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.7 }}
              />
            </TabsList>
          </div>

          {tabLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Tab Content (no animation for content) */}
          {!tabLoading && (
            <div className="space-y-8">
              {activeTab === "introduction" && <IntroductionTab />}
              {activeTab === "skills" && <SkillsTab />}
              {activeTab === "projects" && <ProjectsTab />}
              {activeTab === "education" && <EducationTab />}
              {activeTab === "contact" && <ContactTab />}
            </div>
          )}
        </Tabs>
      </div>
    </div>
  )
}
