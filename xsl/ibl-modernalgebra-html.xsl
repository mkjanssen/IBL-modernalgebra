<?xml version="1.0" encoding="UTF-8" ?>

<!-- Customizations for HTML runs -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "../xsl/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- Conveniences for classes of similar elements -->
  
<!-- Assumes current file is in mathbook/user, so it must be copied there -->
<xsl:import href="../xsl/mathbook-html.xsl" />

<!-- List Chapters and Sections in sidebar Table of Contents -->
<xsl:param name="toc.level" select="'2'" />

<!-- Examples and inline exercises are knowlized by default -->
<!-- We disable this behavior  -->
<xsl:param name="html.knowl.example" select="'no'" />
<xsl:param name="html.knowl.exercise.inline" select="'no'" />

<!-- Exercises may have hint, answer, and solution -->
<xsl:param name="exercise.divisional.statement" select="'yes'" />
<xsl:param name="exercise.divisional.hint" select="'yes'" />
<xsl:param name="exercise.divisional.answer" select="'no'" />
<xsl:param name="exercise.divisional.solution" select="'no'" />
<xsl:param name="exercise.inline.statement" select="'yes'" />
<xsl:param name="exercise.inline.hint" select="'yes'" />
<xsl:param name="exercise.inline.answer" select="'no'" />
<xsl:param name="exercise.inline.solution" select="'no'" />

<xsl:param name="project.statement" select="'yes'" />
<xsl:param name="project.hint" select="'yes'" />
<xsl:param name="project.answer" select="'no'" />
<xsl:param name="project.solution" select="'no'" />


<!-- Specify the color scheme to use for HTML -->
<xsl:param name="debug.colors" select="'blue_grey'" />

<!-- Kill all proofs in output -->
<xsl:template match="proof" />


</xsl:stylesheet>
