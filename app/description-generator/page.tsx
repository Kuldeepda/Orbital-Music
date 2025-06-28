"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Youtube, ArrowLeft, Copy, Check } from "lucide-react"
import Link from "next/link"

export default function DescriptionGenerator() {
  const [formData, setFormData] = useState({
    fullTitle: "",
    primaryArtist: "",
    secondaryArtist: "",
    songName: "",
    socialMedia1: "",
    socialMedia2: "",
    streamingLink: "",
    lyrics: "",
    relatedArtist: "",
  })
  const [generatedDescription, setGeneratedDescription] = useState("")
  const [copied, setCopied] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateDescription = () => {
    const {
      fullTitle,
      primaryArtist,
      secondaryArtist,
      songName,
      socialMedia1,
      socialMedia2,
      streamingLink,
      lyrics,
      relatedArtist,
    } = formData

    if (!primaryArtist.trim() || !songName.trim()) {
      alert("Please enter at least Primary Artist and Song Name")
      return
    }

    let description = `👑 ${fullTitle || `${primaryArtist} - ${songName}`}\n`
    description += `🔥 Help us reach 50,000 subscribers!\n`
    description += `🔔 Turn on notifications to stay updated with new uploads!\n\n`
    description += `🎧 Stream & Download: ${streamingLink || "[Add your streaming link]"}\n\n`
    description += `✨ Follow ${primaryArtist}:\n${socialMedia1 || "[Add social media links]"}\n\n`

    if (secondaryArtist.trim()) {
      description += `✨ Follow ${secondaryArtist}:\n${socialMedia2 || "[Add social media links]"}\n\n`
    }

    description += "×=×=×=×=×"

    if (lyrics.trim()) {
      description += `\n\nLyrics for "${primaryArtist} - ${songName}"\n\n${lyrics}`
    }

    description += "\n\n×=×=×=×=×"
    description += `\n\n🏷️Tags\n#${songName.toLowerCase().replace(/\s/g, "")} #${primaryArtist.toLowerCase().replace(/\s/g, "")} #orbitalmusic #dailyhiphop #${songName.toLowerCase().replace(/\s/g, "")}lyrics`
    description += "\n📥 Submit your music: https://orbitalmusic.portal.district.biz/app/login"
    description += "\n\n📌 LINKS: \nSubscribe: https://www.youtube.com/@OrbitalMusix?sub_confirmation=1"
    description += `\n\n${primaryArtist}, `

    if (secondaryArtist.trim()) {
      description += `${secondaryArtist}, `
    }
    if (relatedArtist.trim()) {
      description += `${relatedArtist}, `
    }

    description += `${primaryArtist} Latest, ${songName} Lyrics, ${songName} Lyrics Video`

    setGeneratedDescription(description)
  }

  const copyDescription = async () => {
    if (!generatedDescription) return

    try {
      await navigator.clipboard.writeText(generatedDescription)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = generatedDescription
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Youtube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-mono">
              📺 YouTube Description Generator
            </h1>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">ORBITAL MUSIC</h2>
            <p className="text-xl text-gray-300">Create compelling YouTube descriptions for your music videos</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/40 backdrop-blur-sm border-pink-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-pink-300 font-mono">Generate Your Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="fullTitle" className="text-pink-300 font-semibold flex items-center gap-2">
                  👇 Enter Full Title:
                </Label>
                <Input
                  id="fullTitle"
                  value={formData.fullTitle}
                  onChange={(e) => handleInputChange("fullTitle", e.target.value)}
                  placeholder="Enter the complete title for your video"
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="primaryArtist" className="text-pink-300 font-semibold flex items-center gap-2">
                    🎤 Primary Artist: *
                  </Label>
                  <Input
                    id="primaryArtist"
                    value={formData.primaryArtist}
                    onChange={(e) => handleInputChange("primaryArtist", e.target.value)}
                    placeholder="Enter primary artist name"
                    className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                  />
                </div>

                <div>
                  <Label htmlFor="secondaryArtist" className="text-pink-300 font-semibold flex items-center gap-2">
                    🎤 Secondary Artist:
                  </Label>
                  <Input
                    id="secondaryArtist"
                    value={formData.secondaryArtist}
                    onChange={(e) => handleInputChange("secondaryArtist", e.target.value)}
                    placeholder="Enter collaborating artist name"
                    className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="songName" className="text-pink-300 font-semibold">
                  Song Name: *
                </Label>
                <Input
                  id="songName"
                  value={formData.songName}
                  onChange={(e) => handleInputChange("songName", e.target.value)}
                  placeholder="Enter song/track name"
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div>
                <Label htmlFor="streamingLink" className="text-pink-300 font-semibold">
                  Link For Streaming Music:
                </Label>
                <Input
                  id="streamingLink"
                  value={formData.streamingLink}
                  onChange={(e) => handleInputChange("streamingLink", e.target.value)}
                  placeholder="Spotify, Apple Music, or other streaming platform link"
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div>
                <Label htmlFor="socialMedia1" className="text-pink-300 font-semibold">
                  Social Media 1:
                </Label>
                <Textarea
                  id="socialMedia1"
                  value={formData.socialMedia1}
                  onChange={(e) => handleInputChange("socialMedia1", e.target.value)}
                  placeholder="Instagram, Twitter, SoundCloud links for primary artist"
                  rows={4}
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div>
                <Label htmlFor="socialMedia2" className="text-pink-300 font-semibold">
                  Social Media 2:
                </Label>
                <Textarea
                  id="socialMedia2"
                  value={formData.socialMedia2}
                  onChange={(e) => handleInputChange("socialMedia2", e.target.value)}
                  placeholder="Instagram, Twitter, SoundCloud links for secondary artist"
                  rows={4}
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div>
                <Label htmlFor="lyrics" className="text-pink-300 font-semibold">
                  Lyrics:
                </Label>
                <Textarea
                  id="lyrics"
                  value={formData.lyrics}
                  onChange={(e) => handleInputChange("lyrics", e.target.value)}
                  placeholder="Enter the song lyrics here..."
                  rows={8}
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <div>
                <Label htmlFor="relatedArtist" className="text-pink-300 font-semibold">
                  Related Artist/Extra Artist (Optional):
                </Label>
                <Input
                  id="relatedArtist"
                  value={formData.relatedArtist}
                  onChange={(e) => handleInputChange("relatedArtist", e.target.value)}
                  placeholder="Enter related or featured artist names"
                  className="bg-gray-700/50 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-400"
                />
              </div>

              <Button
                onClick={generateDescription}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg py-3 font-semibold"
              >
                Generate Description
              </Button>

              {generatedDescription && (
                <div className="space-y-4">
                  <Card className="bg-gray-700/40 border border-pink-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-pink-300 flex items-center justify-between">
                        Generated Description
                        <Button
                          onClick={copyDescription}
                          variant="outline"
                          size="sm"
                          className="border-pink-500/30 text-pink-300 hover:bg-pink-500/20"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </>
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        value={generatedDescription}
                        readOnly
                        className="bg-gray-800/30 border-gray-600/30 text-gray-200 min-h-[400px] font-mono text-sm"
                      />
                      <div className="mt-4 text-sm text-gray-400">(Click the button to copy the description)</div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card className="mt-8 bg-black/20 backdrop-blur-sm border-pink-500/10">
            <CardHeader>
              <CardTitle className="text-lg text-pink-300">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Include complete song lyrics to improve engagement and searchability</li>
                <li>• Add all relevant social media links to maximize artist exposure</li>
                <li>• Use the full title field for better video optimization</li>
                <li>• Related artists help expand your video's reach to similar audiences</li>
                <li>• The description includes ORBITAL MUSIC branding and submission links</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
