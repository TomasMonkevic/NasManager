lazy val root = (project in file(".")).
  settings(
    inThisBuild(List(
      organization := "com.tomasmo",
      scalaVersion := "2.13.3",
      version := "0.0.1"
    )),
    name := "nas-manager",
    libraryDependencies ++= Seq(
      "org.specs2" %% "specs2-core" % "4.13.0"
    )
  )

enablePlugins(AkkaGrpcPlugin)

enablePlugins(JavaAppPackaging)
enablePlugins(DockerPlugin)
enablePlugins(AshScriptPlugin)

Compile / mainClass := Some("com.tomasmo.GreeterServer")
dockerBaseImage       := "openjdk:jre-alpine"
