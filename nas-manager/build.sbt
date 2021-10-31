lazy val root = (project in file(".")).
  settings(
    inThisBuild(List(
      organization := "ch.epfl.scala",
      scalaVersion := "2.13.3"
    )),
    name := "nas-manager",
    libraryDependencies += "org.specs2" %% "specs2-core" % "4.13.0"
  )

enablePlugins(AkkaGrpcPlugin)
