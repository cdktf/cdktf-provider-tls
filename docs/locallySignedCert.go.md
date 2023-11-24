# `tls_locally_signed_cert`

Refer to the Terraform Registory for docs: [`tls_locally_signed_cert`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert).

# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktf/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

locallysignedcert.NewLocallySignedCert(scope Construct, id *string, config LocallySignedCertConfig) LocallySignedCert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">ResetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">ResetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">ResetSetSubjectKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEarlyRenewalHours` <a name="ResetEarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```go
func ResetEarlyRenewalHours()
```

##### `ResetIsCaCertificate` <a name="ResetIsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```go
func ResetIsCaCertificate()
```

##### `ResetSetSubjectKeyId` <a name="ResetSetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```go
func ResetSetSubjectKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

locallysignedcert.LocallySignedCert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

locallysignedcert.LocallySignedCert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

locallysignedcert.LocallySignedCert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

locallysignedcert.LocallySignedCert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LocallySignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LocallySignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LocallySignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">CaKeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">CertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">ReadyForRenewal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">ValidityEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">ValidityStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">AllowedUsesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">CaCertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">CaPrivateKeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">CertRequestPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">EarlyRenewalHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">IsCaCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">SetSubjectKeyIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">ValidityPeriodHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">AllowedUses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">CertRequestPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">IsCaCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaKeyAlgorithm`<sup>Required</sup> <a name="CaKeyAlgorithm" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```go
func CaKeyAlgorithm() *string
```

- *Type:* *string

---

##### `CertPem`<sup>Required</sup> <a name="CertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```go
func CertPem() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReadyForRenewal`<sup>Required</sup> <a name="ReadyForRenewal" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```go
func ReadyForRenewal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ValidityEndTime`<sup>Required</sup> <a name="ValidityEndTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```go
func ValidityEndTime() *string
```

- *Type:* *string

---

##### `ValidityStartTime`<sup>Required</sup> <a name="ValidityStartTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```go
func ValidityStartTime() *string
```

- *Type:* *string

---

##### `AllowedUsesInput`<sup>Optional</sup> <a name="AllowedUsesInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```go
func AllowedUsesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```go
func CaCertPemInput() *string
```

- *Type:* *string

---

##### `CaPrivateKeyPemInput`<sup>Optional</sup> <a name="CaPrivateKeyPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```go
func CaPrivateKeyPemInput() *string
```

- *Type:* *string

---

##### `CertRequestPemInput`<sup>Optional</sup> <a name="CertRequestPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```go
func CertRequestPemInput() *string
```

- *Type:* *string

---

##### `EarlyRenewalHoursInput`<sup>Optional</sup> <a name="EarlyRenewalHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```go
func EarlyRenewalHoursInput() *f64
```

- *Type:* *f64

---

##### `IsCaCertificateInput`<sup>Optional</sup> <a name="IsCaCertificateInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```go
func IsCaCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SetSubjectKeyIdInput`<sup>Optional</sup> <a name="SetSubjectKeyIdInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```go
func SetSubjectKeyIdInput() interface{}
```

- *Type:* interface{}

---

##### `ValidityPeriodHoursInput`<sup>Optional</sup> <a name="ValidityPeriodHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```go
func ValidityPeriodHoursInput() *f64
```

- *Type:* *f64

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```go
func AllowedUses() *[]*string
```

- *Type:* *[]*string

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```go
func CaCertPem() *string
```

- *Type:* *string

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```go
func CaPrivateKeyPem() *string
```

- *Type:* *string

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```go
func CertRequestPem() *string
```

- *Type:* *string

---

##### `EarlyRenewalHours`<sup>Required</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```go
func EarlyRenewalHours() *f64
```

- *Type:* *f64

---

##### `IsCaCertificate`<sup>Required</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```go
func IsCaCertificate() interface{}
```

- *Type:* interface{}

---

##### `SetSubjectKeyId`<sup>Required</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```go
func SetSubjectKeyId() interface{}
```

- *Type:* interface{}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```go
func ValidityPeriodHours() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/locallysignedcert"

&locallysignedcert.LocallySignedCertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedUses: *[]*string,
	CaCertPem: *string,
	CaPrivateKeyPem: *string,
	CertRequestPem: *string,
	ValidityPeriodHours: *f64,
	EarlyRenewalHours: *f64,
	IsCaCertificate: interface{},
	SetSubjectKeyId: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">AllowedUses</a></code> | <code>*[]*string</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>*string</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">CertRequestPem</a></code> | <code>*string</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>*f64</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>*f64</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">IsCaCertificate</a></code> | <code>interface{}</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>interface{}</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```go
AllowedUses *[]*string
```

- *Type:* *[]*string

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```go
CaCertPem *string
```

- *Type:* *string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```go
CaPrivateKeyPem *string
```

- *Type:* *string

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```go
CertRequestPem *string
```

- *Type:* *string

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```go
ValidityPeriodHours *f64
```

- *Type:* *f64

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `EarlyRenewalHours`<sup>Optional</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```go
EarlyRenewalHours *f64
```

- *Type:* *f64

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `IsCaCertificate`<sup>Optional</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```go
IsCaCertificate interface{}
```

- *Type:* interface{}

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `SetSubjectKeyId`<sup>Optional</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```go
SetSubjectKeyId interface{}
```

- *Type:* interface{}

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



