# `tls_locally_signed_cert`

Refer to the Terraform Registory for docs: [`tls_locally_signed_cert`](https://www.terraform.io/docs/providers/tls/r/locally_signed_cert).

# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktf/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new LocallySignedCert(Construct Scope, string Id, LocallySignedCertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">ResetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">ResetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">ResetSetSubjectKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEarlyRenewalHours` <a name="ResetEarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```csharp
private void ResetEarlyRenewalHours()
```

##### `ResetIsCaCertificate` <a name="ResetIsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```csharp
private void ResetIsCaCertificate()
```

##### `ResetSetSubjectKeyId` <a name="ResetSetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```csharp
private void ResetSetSubjectKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

LocallySignedCert.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

LocallySignedCert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

LocallySignedCert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">CaKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">CertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">ReadyForRenewal</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">ValidityEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">ValidityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">AllowedUsesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">CaCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">CaPrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">CertRequestPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">EarlyRenewalHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">IsCaCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">SetSubjectKeyIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">ValidityPeriodHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">CaCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">CertRequestPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">IsCaCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CaKeyAlgorithm`<sup>Required</sup> <a name="CaKeyAlgorithm" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```csharp
public string CaKeyAlgorithm { get; }
```

- *Type:* string

---

##### `CertPem`<sup>Required</sup> <a name="CertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```csharp
public string CertPem { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReadyForRenewal`<sup>Required</sup> <a name="ReadyForRenewal" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```csharp
public IResolvable ReadyForRenewal { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ValidityEndTime`<sup>Required</sup> <a name="ValidityEndTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```csharp
public string ValidityEndTime { get; }
```

- *Type:* string

---

##### `ValidityStartTime`<sup>Required</sup> <a name="ValidityStartTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```csharp
public string ValidityStartTime { get; }
```

- *Type:* string

---

##### `AllowedUsesInput`<sup>Optional</sup> <a name="AllowedUsesInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```csharp
public string[] AllowedUsesInput { get; }
```

- *Type:* string[]

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```csharp
public string CaCertPemInput { get; }
```

- *Type:* string

---

##### `CaPrivateKeyPemInput`<sup>Optional</sup> <a name="CaPrivateKeyPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```csharp
public string CaPrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `CertRequestPemInput`<sup>Optional</sup> <a name="CertRequestPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```csharp
public string CertRequestPemInput { get; }
```

- *Type:* string

---

##### `EarlyRenewalHoursInput`<sup>Optional</sup> <a name="EarlyRenewalHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```csharp
public double EarlyRenewalHoursInput { get; }
```

- *Type:* double

---

##### `IsCaCertificateInput`<sup>Optional</sup> <a name="IsCaCertificateInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```csharp
public object IsCaCertificateInput { get; }
```

- *Type:* object

---

##### `SetSubjectKeyIdInput`<sup>Optional</sup> <a name="SetSubjectKeyIdInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```csharp
public object SetSubjectKeyIdInput { get; }
```

- *Type:* object

---

##### `ValidityPeriodHoursInput`<sup>Optional</sup> <a name="ValidityPeriodHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```csharp
public double ValidityPeriodHoursInput { get; }
```

- *Type:* double

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; }
```

- *Type:* string[]

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```csharp
public string CaCertPem { get; }
```

- *Type:* string

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```csharp
public string CaPrivateKeyPem { get; }
```

- *Type:* string

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```csharp
public string CertRequestPem { get; }
```

- *Type:* string

---

##### `EarlyRenewalHours`<sup>Required</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; }
```

- *Type:* double

---

##### `IsCaCertificate`<sup>Required</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```csharp
public object IsCaCertificate { get; }
```

- *Type:* object

---

##### `SetSubjectKeyId`<sup>Required</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```csharp
public object SetSubjectKeyId { get; }
```

- *Type:* object

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new LocallySignedCertConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedUses,
    string CaCertPem,
    string CaPrivateKeyPem,
    string CertRequestPem,
    double ValidityPeriodHours,
    double EarlyRenewalHours = null,
    object IsCaCertificate = null,
    object SetSubjectKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">CaCertPem</a></code> | <code>string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>string</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">CertRequestPem</a></code> | <code>string</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">IsCaCertificate</a></code> | <code>object</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>object</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; set; }
```

- *Type:* string[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```csharp
public string CaCertPem { get; set; }
```

- *Type:* string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```csharp
public string CaPrivateKeyPem { get; set; }
```

- *Type:* string

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```csharp
public string CertRequestPem { get; set; }
```

- *Type:* string

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; set; }
```

- *Type:* double

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `EarlyRenewalHours`<sup>Optional</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; set; }
```

- *Type:* double

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `IsCaCertificate`<sup>Optional</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```csharp
public object IsCaCertificate { get; set; }
```

- *Type:* object

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `SetSubjectKeyId`<sup>Optional</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```csharp
public object SetSubjectKeyId { get; set; }
```

- *Type:* object

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



