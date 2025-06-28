"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Music, ArrowLeft, Copy, Check } from "lucide-react"
import Link from "next/link"

export default function TagGenerator() {
  const [artistName, setArtistName] = useState("")
  const [songName, setSongName] = useState("")
  const [generatedTags, setGeneratedTags] = useState("")
  const [copied, setCopied] = useState(false)

  const generateTags = () => {
    if (!artistName.trim() || !songName.trim()) {
      alert("Please enter both artist name and song name")
      return
    }

    const tags = `${artistName},
${songName},
${artistName} ${songName},
phonk,
lifetales,
lifetales phonk,
drift phonk,
aggressive phonk,
phonk music,
best phonk,
house phonk,
phonk 2024,
cowbell,
tiktok phonk,
phonk drift,
фонк,
агрессивного фонка,
memphis,
sahara,
kordhell,
DVRST,
Neonblade,
phonk mix,
phonk playlist,
dark phonk,
brazilian phonk,
phonk beats,
phonk remix,
underground phonk,
phonk compilation`

    setGeneratedTags(tags)
  }

  const copyTags = async () => {
    if (!generatedTags) return

    try {
      await navigator.clipboard.writeText(generatedTags.toLowerCase())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = generatedTags.toLowerCase()
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
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
              🎧 Tag Generator
            </h1>
            <p className="text-xl text-gray-300">Generate SEO-optimized tags for your phonk music videos</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-300 font-mono">Generate Your Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="artistName" className="text-purple-300 font-semibold uppercase tracking-wide">
                    Artist Name
                  </Label>
                  <Input
                    id="artistName"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Enter artist name"
                    className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>

                <div>
                  <Label htmlFor="songName" className="text-purple-300 font-semibold uppercase tracking-wide">
                    Song Name
                  </Label>
                  <Input
                    id="songName"
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                    placeholder="Enter song name"
                    className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                  />
                </div>
              </div>

              <Button
                onClick={generateTags}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3 font-semibold"
              >
                Generate Tags
              </Button>

              {generatedTags && (
                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <Label className="text-purple-300 font-semibold">Generated Tags</Label>
                      <Button
                        onClick={copyTags}
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Tags
                          </>
                        )}
                      </Button>
                    </div>
                    <Textarea
                      value={generatedTags}
                      readOnly
                      className="bg-gray-800/30 border-gray-600/30 text-gray-200 min-h-[200px] font-mono text-sm"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card className="mt-8 bg-black/20 backdrop-blur-sm border-purple-500/10">
            <CardHeader>
              <CardTitle className="text-lg text-purple-300">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Use specific artist and song names for better targeting</li>
                <li>• Tags are automatically converted to lowercase for YouTube</li>
                <li>• Mix of English and Russian tags helps reach broader audience</li>
                <li>• Include trending phonk artists and terms for better discoverability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
